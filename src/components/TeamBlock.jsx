import React from 'react';
import { styled } from 'styled-components';
import STRINGS from './constants/strings';
import { sizes } from './constants/devices';

const TeamBlockContainer = styled.section`
    background-color:white;
    padding: 10em 6em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MeetTeamHeader = styled.h2`
    font-family: 'Noe Display';
    font-weight: 500;
    font-size: 5rem;
    margin: 0;
    margin-bottom: 4rem;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 4rem;
    max-width: 1440px;

    @media only screen and (max-width: ${sizes.tablet}) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
`;

const ProfileWrapper = styled.div`

`;

const Profile = styled.img`
    /* max-width: 200px; */
    width: 100%;
    border-radius: 8px;
    border: 1px solid black;
`;

const ProfileName = styled.h2`
    font-family: 'Noe Display';
    font-weight: 500;
    font-size: 3.2rem;
    margin: 0;
    margin-top: 2.4rem;
    text-align: left;
`;

const ExpandButton = styled.button`
    font-family: "Noto Sans";
    font-weight: 500;
    margin-top: 8rem;
    padding: 1.6rem 3.2rem;
    font-size: 2rem;
    background: transparent;
    border-style: none;
    border: 2px solid black;
    cursor: pointer;
    border-radius: 2px;
`;

const TeamBlock = () => {
    return (
        <TeamBlockContainer>
            <MeetTeamHeader>
                {STRINGS.MEET_TEAM_BLOCK_HEADER_1}
            </MeetTeamHeader>
            <GridContainer>
                <ProfileWrapper>
                    <Profile src="images/tom.webp" />
                    <ProfileName>
                        Tom Ajello
                    </ProfileName>
                </ProfileWrapper>
                <ProfileWrapper>
                    <Profile src="images/justin.webp" />
                    <ProfileName>
                        Justin D'Onofrio
                    </ProfileName>
                </ProfileWrapper>
                <ProfileWrapper>
                    <Profile src="images/melissa.webp" />
                    <ProfileName>
                        Melissa Tishler
                    </ProfileName>
                </ProfileWrapper>
            </GridContainer>
            <ExpandButton>{STRINGS.MEET_TEAM_BLOCK_BUTTON_1}</ExpandButton>
        </TeamBlockContainer>
    );
};

export default TeamBlock;