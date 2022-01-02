import './ExploreContainer.css';
import { createUseStyles } from "react-jss";

interface ContainerProps {
  name: string;
}

export default function ExploreContainer({ name }: ContainerProps) {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

const useStyles = createUseStyles({
  container: {
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  "container strong": {
    fontSize: 20,
    lineHeight: 26,
  },
  "container p": {
    fontSize: 16,
    lineHeight: 22,
    color: '#8c8c8c',
    margin: 0,
  },
  "container a": {
    textDecoration: 'none',
  },
});
