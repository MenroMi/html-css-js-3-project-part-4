import {useState} from 'react';
import {Cards, Header, Switch} from './components';
import {Box} from './components/UI';
import {annuallyPlans, monthlyPlans} from './constants';

function App() {
  const [isMonthly, setIsMonthly] = useState<boolean>(false);

  return (
    <Box>
      <Header
        classNameBox=""
        classNameTitle="text-4xl font-semibold text-grayish-blue text-center"
      >
        <Box className="flex items-center gap-4 sm:gap-7 justify-center mt-14">
          <p className="text-md sm:text-xl text-light-grayish-blue font-semibold">
            Annually
          </p>
          <Switch isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
          <p className="text-md sm:text-lg text-light-grayish-blue font-semibold">
            Monthly
          </p>
        </Box>
      </Header>
      <main id="main">
        <Cards
          classNameList="flex flex-col gap-8 lg:gap-0 lg:flex-row w-full items-center justify-center mt-16 "
          plans={isMonthly ? monthlyPlans : annuallyPlans}
        />
      </main>
    </Box>
  );
}

export default App;
