import {IPlan} from '../../types';
import Card from '../Card';

interface ICardsProps {
  classNameList: string;
  plans: IPlan[];
}

const Cards = ({classNameList, plans}: ICardsProps) => {
  return (
    <ul className={classNameList}>
      {plans.map(({advantages, id, price, title}) => (
        <Card
          key={id}
          title={title}
          price={price}
          advantages={advantages}
          id={id}
        />
      ))}
    </ul>
  );
};

export default Cards;
