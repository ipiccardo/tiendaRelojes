import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const data = [];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(4)) : data).map((Item, index) => (
        <Box key={index} sx={{ maxWidth: 300, marginRight: 0.5, my: 5 }}>
          {Item ? (
            <img
              style={{ maxWidth: 300, height: 118 }}
              alt={Item.title}
              src={Item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={300} height={118} />
          )}

          {Item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {Item.title}
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary">
                {Item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${Item.views} • ${Item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="100%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Loader() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media loading />
      <Media />
    </Box>
  );
}