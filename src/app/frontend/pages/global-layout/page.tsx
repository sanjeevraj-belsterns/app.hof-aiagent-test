/* eslint-disable prettier/prettier */
'use client';

import React, { useState } from 'react';
import {
  Grid2,
  IconButton,
  List,
  SwipeableDrawer,
  Typography
} from '@mui/material';
import { useMediaQuery, Theme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ElTypography } from '@/app/frontend/elements/typography/typography';

export default function GlobalLayout() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpen(open);
    };

  return (
    <React.Fragment>
      <div
        style={{ minHeight: '100vh', width: '100vw', backgroundColor: 'gray' }}
      >
        <Grid2
          container
          spacing={0.5}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            backgroundColor: 'yellow'
          }}
        >
          <Grid2
            container
            size={12}
            sx={{ backgroundColor: 'green', flex: 1, minHeight: '10vh' }}
            justifyContent={'center'}
            alignItems={'center'}
          >
            {/* <Grid2 container size={{ xs:12, md:10 }} sx={{backgroundColor:"red"}}> */}
            <Typography>Header</Typography>
            {isMobile && (
              <IconButton
                color="primary"
                aria-label="menu"
                onClick={() => {
                  setOpen(!open);
                }}
                sx={{
                  position: 'fixed',
                  top: '16px',
                  left: '16px',
                  zIndex: 1300
                  // backgroundColor: "white",
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
            {/* </Grid2> */}
          </Grid2>
          <Grid2
            container
            size={12}
            sx={{
              flex: 1,
              flexDirection: isMobile ? 'column-reverse' : 'row',
              minHeight: '77vh'
            }}
          >
            <Grid2
              container
              size={{ xs: 0, sm: 3 }}
              sx={{
                backgroundColor: 'lime',
                display: { xs: 'none', sm: 'block' }
              }}
            >
              left side bar
            </Grid2>
            <Grid2
              container
              size={{ xs: 12, sm: 6 }}
              sx={{
                flex: 1,
                flexDirection: 'column',
                p: 1,
                backgroundColor: 'pink',
                overflowY: 'auto',
                maxHeight: '100%'
              }}
            >
              {/* articles */}
              <Grid2>
                <ElTypography
                  variant="h4"
                  color="black"
                  content="Main Heading"
                  fontWeight="600"
                />
              </Grid2>
              <Grid2>
                <ElTypography
                  variant="h6"
                  color="black"
                  content="Sub Heading"
                  fontWeight="700"
                />
              </Grid2>
              <Grid2>
                <ElTypography
                  variant="body1"
                  color="black"
                  content="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
                                    "
                  fontWeight="400"
                />
              </Grid2>
            </Grid2>
            <Grid2
              container
              size={{ xs: 12, sm: 3 }}
              sx={{
                minHeight: isMobile ? '15vh' : '77vh',
                backgroundColor: 'orange',
                display: { xs: 'block', sm: 'block' }
              }}
            >
              aside
            </Grid2>
          </Grid2>
          <Grid2
            container
            size={12}
            sx={{
              backgroundColor: 'brown',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '10vh'
            }}
          >
            {/* <Grid2 container size={{ xs:12, md:10 }} sx={{backgroundColor:"red"}}> */}

            <Typography>Footer</Typography>
          </Grid2>
          {/* </Grid2> */}
        </Grid2>
      </div>

      {/*Mobile view Nav bar display */}
      <div className="block sm:hidden">
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <List
            className="w-[60vw] md:w-[30vw]"
            sx={{ height: '100%', backgroundColor: 'green' }}
          >
            test
          </List>
        </SwipeableDrawer>
      </div>
    </React.Fragment>
  );
}
