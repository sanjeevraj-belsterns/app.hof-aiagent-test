/* eslint-disable prettier/prettier */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid2,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

export default function Sample() {
  return (
    <div className="flex bg-gray-100 overflow-hidden w-0 sm:w-[250px] p-2">
      <Grid2 sx={{ minHeight: '5vh', width: '100%' }}>
        <Accordion
          elevation={0}
          // expanded={expanded === Object.keys(filtersearchData)[i]}
          // onChange={handleChange(Object.keys(filtersearchData)[i])}
          sx={{
            width: '100%',
            minHeight: '1vh',
            backgroundColor: 'transparent',
            border: 0
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={{
              '&.MuiAccordionSummary-root': {
                padding: '0px',
                margin: '0px',
                ':hover': {
                  backgroundColor: 'green'
                }
              }
            }}
          >
            <Typography>Main</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ minHeight: '5vh', padding: '0px' }}>
            <Link href="" style={{ paddingTop: '2vh' }}>
              Dashboard
            </Link>
            <br />
            <Link href="" style={{ paddingTop: '2vh' }}>
              Workspace
            </Link>
          </AccordionDetails>
        </Accordion>
      </Grid2>
    </div>
  );
}
