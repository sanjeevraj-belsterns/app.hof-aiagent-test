import { NextRequest, NextResponse } from 'next/server';

type ApiMethod = (request: NextRequest) => Promise<any>;

export function withInterceptor(apiMethod: ApiMethod): ApiMethod {
  return async request => {
    try {
      const response = await apiMethod(request);
      return NextResponse.json(response, { status: 200 });
    } catch (err: any) {
      if (err.statusCode === 422) {
        return NextResponse.json(
          { message: err.message, data: err.data },
          { status: err.statusCode }
        );
      } else if (err.statusCode) {
        return NextResponse.json(
          { message: err.message, data: err.data || null },
          { status: err.statusCode }
        );
      } else {
        return NextResponse.json({ message: err.message }, { status: 500 });
      }
    }
  };
}
