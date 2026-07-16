//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//Import components here
import SnackList from './SnackList';
import SnackHeader from './SnackHeader';
import SnackFooter from './SnackFooter';

export default function StudentWork() {
  return (
    <div>
      {/* add JSX here */}
      <SnackHeader />
      <SnackList />
      <SnackFooter />
      <p> Student output will go here</p>
    </div>
  );
}
