import Header from '../../components/Header/Header';

import { Button, ContentWrapper, ExploreButton, Heading, SubHeading, Text, Wrapper } from './Home.styled'
const Home = () => {
    return (
        <Wrapper>
            <Header />
            <ContentWrapper>
                <SubHeading>so, you want to travel to</SubHeading>
                <Heading>space</Heading>
                <Text>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Text>
                <Button><ExploreButton to="/destination">explore</ExploreButton></Button>
            </ContentWrapper>
        </Wrapper>
    );
};

export default Home;