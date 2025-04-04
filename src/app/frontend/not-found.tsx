import { ElLink } from '@/app/frontend/elements/link/link';

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 style={{ fontWeight: 'bold', fontSize: '23px' }}>Not found</h1>
      <p style={{ fontSize: '16px' }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <p style={{ fontSize: '12px' }}>
        return&nbsp;
        <ElLink href="/sign-in" content="sign in" />
      </p>
    </div>
  );
};
export default NotFound;
