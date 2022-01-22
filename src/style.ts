import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const FOOTER_BORDER_HEIGHT = 1;

export const useDefaultStyles = makeStyles((theme: Theme) => ({
  table: {
    boxSizing: 'border-box',

    '& .topLeftGrid': {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 200],
      borderBottom: `2px solid ${theme.palette.divider}`,
      borderRight: `2px solid ${theme.palette.divider}`,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(12),

      // Hide scrollbars
      '&::-webkit-scrollbar': { //Chrome/Safari
        display: 'none'
      },
      'scrollbar-width': 'none',  //Firefox
      '-ms-overflow-style': 'none'  //IE
    },

    '& .topRightGrid': {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 200],
      borderBottom: `2px solid ${theme.palette.divider}`,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(12),

      // Hide scrollbars
      '&::-webkit-scrollbar': { //Chrome/Safari
        display: 'none'
      },
      'scrollbar-width': 'none',  //Firefox
      '-ms-overflow-style': 'none'  //IE
    },

    '& .bottomLeftGrid': {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 200],
      borderRight: `2px solid ${theme.palette.divider}`,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(13),

      // Hide scrollbars
      '&::-webkit-scrollbar': { //Chrome/Safari
        display: 'none'
      },
      'scrollbar-width': 'none',  //Firefox
      '-ms-overflow-style': 'none'  //IE
    },

    '& .bottomRightGrid': {
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(13),
      outline: 'none' // See: https://github.com/bvaughn/react-virtualized/issues/381
    }
  },
  cell: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center'
  },
  cellClickable: {
    cursor: 'pointer'
  },
  cellSelected: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'dark' ? 900 : 100]
  },
  cellHovered: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 200]
  },
  cellDisabled: {
    opacity: 0.5
  },
  cellContents: {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  cellHeader: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.secondary
  },
  cellInLastColumn: {
    paddingRight: theme.spacing(3)
  },
  cellInLastRow: {
    borderBottom: 'none'
  },
  footer: {
    borderTop: `${FOOTER_BORDER_HEIGHT}px solid ${theme.palette.divider}`
  },
  dragHandle: {
    flex: '0 0 16px',
    zIndex: 2,
    cursor: 'col-resize',
    color: '#0085ff'
  },
  DragHandleActive: {
    color: '#0b6fcc',
    zIndex: 3
  },
  DragHandleIcon: {
    flex: '0 0 12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));
