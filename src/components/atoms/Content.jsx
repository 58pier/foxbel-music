import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

const ContentStyles = styled.main`
    padding: 1rem 2rem 2rem;
    ${breakpoints.phone} {
    padding: 1rem;
    }
`;

export const Content = ({ children }) => {
    return <ContentStyles>{children}</ContentStyles>;
};
