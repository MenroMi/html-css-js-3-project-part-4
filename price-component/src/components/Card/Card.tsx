import {Box, Button, Divider} from '../UI';

interface ICardProps extends React.HTMLAttributes<HTMLLIElement> {
  title: string;
  advantages: string[];
  price: number;
  id: string;
}

const Card = ({title, advantages, price, id}: ICardProps) => {
  const divider = (
    <Divider
      className={
        'border-t mt-3.5 ' +
        (id === 'p2' ? 'border-light-blue' : 'border-light-grayish-blue')
      }
    />
  );

  return (
    <li
      className={
        'lg:max-w-card w-full text-center flex flex-col px-8 ' +
        (id === 'p2'
          ? 'h-middle py-17 bg-gradient-to-br from-light-blue to-dark-blue text-white rounded-lg shadow-md lg:shadow-xl '
          : `bg-white h-card py-10 shadow-md max-lg:rounded-lg ${
              id === 'p1' && ' lg:rounded-l-lg'
            } ${id === 'p3' && 'lg:rounded-r-lg'}`)
      }
    >
      <h3
        className={`text-xl font-semibold ${
          id !== 'p2' && 'text-grayish-blue'
        }`}
      >
        {title}
      </h3>
      <p
        className={`relative text-price font-bold flex justify-center items-center gap-2 mt-2 ${
          id !== 'p2' && 'text-dark-grayish-blue'
        }`}
      >
        <span className="block text-3xl">$</span> {price}
      </p>

      {divider}

      {advantages.map((adv, i) => (
        <Box key={i}>
          <p
            className={`mt-3.5 text-md font-semibold ${
              id === 'p2' ? 'text-white' : 'text-grayish-blue'
            }`}
          >
            {adv}
          </p>
          {divider}
        </Box>
      ))}

      <Button
        className={`mx-auto mt-auto mb-0 font-semibold tracking-wider w-full py-3 rounded-md text-sm transition border ${
          id === 'p2'
            ? 'bg-white text-dark-blue hover:bg-transparent hover:border-white hover:text-white'
            : 'bg-gradient-to-r from-light-blue to-dark-blue text-white hover:bg-transparent hover:from-transparent hover:to-transparent hover:border-dark-blue hover:text-dark-blue'
        }`}
      >
        LEARN MORE
      </Button>
    </li>
  );
};

export default Card;
