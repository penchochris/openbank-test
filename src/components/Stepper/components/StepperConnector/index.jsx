import { withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import { COLORS } from 'consts';

const StepperConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: COLORS.primaryColor,
    },
  },
  completed: {
    '& $line': {
      borderColor: COLORS.primaryColor,
    },
  },
  line: {
    borderColor: COLORS.darkGrey,
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

export default StepperConnector;
