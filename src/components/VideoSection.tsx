import React from 'react';
import { Box, Typography } from '@mui/material';
import { COLORS } from 'src/theme';

interface VideoSectionProps {
  videoId: string;
  title?: string;
  description?: string;
}

const VideoSection = ({ videoId, title, description }: VideoSectionProps) => {
  return (
    <Box
      sx={{
        maxWidth: 950,
        mx: 'auto',
        textAlign: 'center',
      }}
    >
      {title && (
        <Typography variant="h2" sx={{ mb: 2.5 }}>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="body_normal" sx={{ mb: 5 }}>
          {description}
        </Typography>
      )}
      <Box
        sx={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Box
          component="iframe"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title || 'Crossplane Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default VideoSection;
