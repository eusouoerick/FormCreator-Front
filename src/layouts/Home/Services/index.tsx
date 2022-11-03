import * as S from './styles';
import Card from './Card';
import data from './data';

const Services = () => {
  return (
    <S.Container id='service'>
      <h2>Services</h2>
      <div style={{ display: 'flex', gap: '93px' }}>
        {data.map((item, i) => (
          <Card key={i} title={item.title} desc={item.desc} icon={item.icon} />
        ))}
      </div>
    </S.Container>
  );
};

export default Services;
