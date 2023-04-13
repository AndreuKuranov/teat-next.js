import Card, { CardVariant } from "@components/Card";
import MainContainer from "@components/MainContainer";
import MyButton from "@components/iu/MyButton/MyButton";

const CardPage = () => {
  return (
    <MainContainer description='card'>
      <Card variant={CardVariant.primary} width="200px" height="200px">
        <MyButton>
          test
        </MyButton>
      </Card>
    </MainContainer>
  )
}

export default CardPage;