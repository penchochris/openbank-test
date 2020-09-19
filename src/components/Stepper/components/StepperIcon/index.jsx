import { withStyles } from '@material-ui/core/styles';
import StepIcon from '@material-ui/core/StepIcon';
import { COLORS } from 'consts';

const StepperIcon = withStyles({
  root: {
    color: COLORS.darkGrey,
    "&$active": {
      color: COLORS.secondaryColor,
    },
    "&$completed": {
      color: "red"
    }
  },
  active: {},
  completed: {}
})(StepIcon);

export default StepperIcon;