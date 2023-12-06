// import universal
import { devices } from '../constants/devices';
import { useMediaQuery } from 'react-responsive';

// import interactions
import { Background, Transition } from '../../interactions/Background';
import { TransformingContent, ImgBox } from '../../interactions/TransformingContent'
import { TransformingTextBox } from '../../interactions/TransformingTextBox';
import { ScrollingColumn } from '../../interactions/ScrollingColumn';
import { OpacityParagraph, OpacityList, OpacitySubheading, OpacityContent } from '../../interactions/OpacityContent';

export { ManifestoSection }

function ManifestoSection({ images }) {

    const startHeight = 790
    const endblock = 1320 / window.innerHeight * 100

    //Heights
    const sectionHeights = [600, 50, 100, 600]

    //Timings | Timings are adjusted to start - end of section
    const sectionTimings = [
        //0 P1 Motion              1 P2 Motion             2 P3 Motion                3 P4 Motion                4 P5 Motion                 5 P6 Motion           
        [[-6 / 14, 1 / 14, 5 / 14], [0 / 7, 2 / 7, 8 / 14], [4 / 14, 7 / 14, 10 / 14], [6 / 14, 9 / 14, 12 / 14], [9 / 14, 12 / 14, 15 / 14], [11 / 14, 14 / 14, 17 / 14],
        //6 P1 Opacity                                  7 P2 Opacity                      8 P3 Opacity                      9 P4 Opacity                       10 P5 Opacity                       11 P6 Opacity
        [-6 / 14, 0 / 14, 2 / 14, 5 / 14], [1 / 14, 3 / 14, 5 / 14, 7 / 14], [3 / 14, 6 / 14, 8 / 14, 11 / 14], [5 / 14, 8 / 14, 10 / 14, 13 / 14], [8 / 14, 11 / 14, 13 / 14, 16 / 14], [10 / 14, 13 / 14, 15 / 14, 18 / 14],
        //12 Avocado Toast Movement          13 Avocado Toast Opacity                           14 Avocado Left Motion
        [1 / 14, 4 / 14, 16 / 14, 18 / 14], [1 / 14, 2 / 14, 3 / 14, 4 / 14, 5 / 14, 21 / 14], [5 / 14, 20 / 14], [11 / 14, 18 / 14]],
        // Empty
        [],
        //Choose
        [[-1 / 4, 1 / 2, 11 / 4], [-1 / 4, 1 / 4, 3 / 4, 4 / 2]],
        //0 Para 1 Trans   1 Para 1 Opacity               2 Para 2 Opacity              3 None     
        [[-1 / 8, 5 / 8], [-1 / 8, 7 / 32, 9 / 32, 5 / 8], [1 / 8, 15 / 32, 17 / 32, 7 / 8], [],
        //4 Para 3 Trans  5 Beach Robot         6 Para 3-2 Opacity
        [3 / 8, 9 / 8], [0.6, 0.8, 0.9455, 1.125], [3 / 8, 6 / 8, 7 / 8, 9 / 8],
        //7 Para 2 Trans 8 Card     9 Para 3-1                    10 Robots             11 Beach Opacity
        [1 / 8, 7 / 8], [0.75, 1], [3 / 8, 5 / 8, 6 / 8, 9 / 8], [0, 0.2, 0.5, 0.7], [0.6, 0.8, 1, 1.5],
        //12                     13                     14
        [-1 / 8, 2 / 8, 5 / 8], [1 / 8, 4 / 8, 7 / 8], [3 / 8, 6 / 8, 9 / 8]
        ]]

    let adjustedTimings = []

    const sum = sectionHeights.reduce((partialSum, a) => partialSum + a, 0) + startHeight + endblock
    const sh = startHeight / sum
    for (let i = 0; i < sectionHeights.length; i++) {
        let start = sectionHeights.slice(0, i).reduce((partialSum, a) => partialSum + a, 0) / sum + sh
        let localSum = sectionHeights[i] / sum
        let adjusted = sectionTimings[i]
        for (let j = 0; j < adjusted.length; j++) {
            adjusted[j] = adjusted[j].map(c => c * localSum + start)
        }
        adjustedTimings.push(adjusted)
    }

    const isLaptop = useMediaQuery({ query: devices.laptop });
    const isMobile = useMediaQuery({ query: devices.mobileL });

    const introParagraphs = (
        <>
            <TransformingTextBox positions={[6, 6, 6]} scrollInfo={adjustedTimings[0][0]} alignment={'top'} specialWidth={'82rem'} child={
                <ScrollingColumn scrollInfo={adjustedTimings[0][0]}>
                    <OpacitySubheading scrollInfo={adjustedTimings[0][6]} center fadeRatio={0.8} text={
                        [<p>“It will take our jobs.”<br />“It's the AI apocalypse.”<br /><br />Today, any consumer of news has seen dire predictions about Artificial Intelligence. And many people, in the creative industries and beyond, are preparing for the worst.</p>]
                    } />
                </ScrollingColumn>
            } />
            <TransformingTextBox positions={[27, 27, 27]} scrollInfo={adjustedTimings[0][2]} alignment={'top'} specialWidth={'78rem'} child={
                <ScrollingColumn scrollInfo={adjustedTimings[0][2]}>
                    <OpacitySubheading scrollInfo={adjustedTimings[0][8]} center fadeRatio={0.8} text={
                        [<p>And while we're all for tossing predictions around like avocado toast recipes on Instagram, what if the truth is somewhere between the fantasy and the fear mongering?</p>]
                    } />
                </ScrollingColumn>
            } />
            <TransformingTextBox positions={[27, 27, 27]} scrollInfo={adjustedTimings[0][3]} alignment={'top'} specialWidth={'115rem'} child={
                <ScrollingColumn scrollInfo={adjustedTimings[0][3]}>
                    <OpacitySubheading scrollInfo={adjustedTimings[0][9]} center fadeRatio={0.8} text={
                        [<p>Here's what we believe:<br /><br />Exercising caution with any new technology is necessary. But choosing to be cautiously optimistic will open up a world of possibilities for our industry. The only way to understand the potential of new tech is to dive head first and learn.<br /><br />And to learn, we must PLAY.</p>]
                    } />
                </ScrollingColumn>
            } />
            <TransformingTextBox positions={[27, 27, 27]} scrollInfo={adjustedTimings[0][4]} alignment={'top'} specialWidth={'100rem'} child={
                <ScrollingColumn scrollInfo={adjustedTimings[0][4]}>
                    <OpacitySubheading scrollInfo={adjustedTimings[0][10]} center fadeRatio={0.8} text={
                        [<p>It's certainly clear that AI will change how we do business. But, for anyone that has moved past worrying about doomsday scenarios into early adoption, it's also clear there will be plenty of business to do be done.</p>]
                    } />
                </ScrollingColumn>
            } />
            <TransformingTextBox positions={[27, 27, 27]} scrollInfo={adjustedTimings[0][5]} alignment={'top'} specialWidth={'93rem'} child={
                <ScrollingColumn scrollInfo={adjustedTimings[0][5]}>
                    <OpacitySubheading scrollInfo={adjustedTimings[0][11]} center fadeRatio={0.8} text={
                        [<p>There are plenty of things about AI we  don't know, but one thing do:<br /><br />AI is not going to take your next job, but a person who knows how to use it just might</p>]
                    } />
                </ScrollingColumn>
            } />
        </>
    )

    const avocados = (
        <>
            <OpacityContent scrollInfo={adjustedTimings[0][13]} child={<TransformingContent child={<ImgBox url={images.avocado_toast} displayDimensions={[58, 84]} rotate={0} />} positions={[[26, 26, 26, 26], [-120, 3, 3, -100]]} scrollInfo={adjustedTimings[0][12]} alignment={['left', 'bottom']} />} />
            <TransformingContent child={<ImgBox url={images.avocado_3} displayDimensions={[20, 38]} rotate={0} />} positions={[[2, 2], [-20, 140]]} scrollInfo={adjustedTimings[0][14]} alignment={['left', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.avocado_1} displayDimensions={[15, 30]} rotate={33} />} positions={[[3, 3], [-20, 100]]} scrollInfo={adjustedTimings[0][15]} alignment={['right', 'bottom']} />
        </>
    )

    const mobileRobots = (
        <>
            <TransformingContent child={<ImgBox url={images.cute_robot1} displayDimensions={[50, 40]} rotate={195} />} positions={[[100, 40, 40, 100], [-50, -20, -20, -50]]} scrollInfo={adjustedTimings[3][10]} alignment={['left', 'top']} />
            <TransformingContent child={<ImgBox url={images.tin_robot3} displayDimensions={[40, 40]} rotate={30} />} positions={[[-50, -20, -20, -50], [-10, -10, -10, -10]]} scrollInfo={adjustedTimings[3][10]} alignment={['left', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.orange_robot1} displayDimensions={[45, 40]} rotate={-30} />} positions={[[100, 60, 60, 100], [-10, -10, -10, -10]]} scrollInfo={adjustedTimings[3][10]} alignment={['left', 'bottom']} />
        </>
    );

    const desktopRobots = (
        <>
            <TransformingContent child={<ImgBox url={images.cute_robot1} displayDimensions={[50, 70]} rotate={195} />} positions={[[-30, -20, -20, -30], [-50, -30, -30, -50]]} scrollInfo={adjustedTimings[3][10]} alignment={['right', 'top']} />
            <TransformingContent child={<ImgBox url={images.tin_robot3} displayDimensions={[30, 80]} rotate={30} />} positions={[[-30, -10, -10, -30], [-10, -10, -10, -10]]} scrollInfo={adjustedTimings[3][10]} alignment={['left', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.orange_robot1} displayDimensions={[45, 80]} rotate={-30} />} positions={[[100, 75, 75, 100], [-20, -20, -20, -20]]} scrollInfo={adjustedTimings[3][10]} alignment={['left', 'bottom']} />
        </>
    )

    const desktopBeach = (
        <OpacityContent scrollInfo={adjustedTimings[3][11]} child={<TransformingContent child={<ImgBox url={images.robot_beach} displayDimensions={[174, 65]} rotate={0} />} positions={[[-175, -80, -40, -40], [0, 0, 0, 100]]} scrollInfo={adjustedTimings[3][5]} alignment={['left', 'bottom']} />} />
    )

    const mobileBeach = (
        <OpacityContent scrollInfo={adjustedTimings[3][11]} child={<TransformingContent child={<ImgBox url={images.robot_beach} displayDimensions={[174, 65]} rotate={0} />} positions={[[-300, -250, -200, -200], [0, 0, 0, 100]]} scrollInfo={adjustedTimings[3][5]} alignment={['left', 'bottom']} />} />
    )

    const desktopCreativity = (
        <TransformingTextBox positions={[27, 27, 27]} scrollInfo={adjustedTimings[2][0]} alignment={'top'} child={
            <ScrollingColumn scrollInfo={adjustedTimings[2][0]}>
                <OpacitySubheading scrollInfo={adjustedTimings[2][1]} dark={false} text={
                    ["Creativity creates progress"]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[2][1]} dark={false} text={
                    [<p>Clamping down now is a bit like the church putting Galileo under house arrest for creating alternative models of the solar system: it's a defensive reflex. While we can't fully predict in abstract how AI will affect our businesses, ongoing and exploratory participation can help us determine how best to integrate it into our daily professional lives.<br /><br />Enough ink has been spilled on the power of AI. The disruption of AI. The hypothesis of how AI will change everything. But who's experimenting? As creatives and consultants have a duty to chart a course beyond convention. In short, we can play.</p>]
                } />
            </ScrollingColumn>
        } />
    )

    const mobileWeChoose = (
        <TransformingTextBox positions={[27, 27]} scrollInfo={adjustedTimings[3][0]} alignment={'top'} child={
            <ScrollingColumn scrollInfo={adjustedTimings[3][12]}>
                <OpacitySubheading scrollInfo={adjustedTimings[3][1]} dark={false} baseOpacity={0} text={
                    ["We choose play"]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[3][1]} dark={false} baseOpacity={0} text={
                    ["These next few months, we're going deep on a grand experiment. We are still in the early stages of understanding AI and its full potential and limitations. By experimenting with AI, we aim to gain a deeper understanding of its capabilities and limitations and make informed decisions about how best to use it. And you get to follow along."]
                } />
            </ScrollingColumn>
        } />
    )

    const desktopWeChoose = (
        <TransformingTextBox positions={[27, 27]} scrollInfo={adjustedTimings[3][0]} alignment={'top'} child={
            <ScrollingColumn scrollInfo={adjustedTimings[3][12]}>
                <OpacitySubheading scrollInfo={adjustedTimings[3][1]} dark={false} text={
                    ["We choose play"]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[3][1]} dark={false} text={
                    ["These next few months, we're going deep on a grand experiment. We are still in the early stages of understanding AI and its full potential and limitations. By experimenting with AI, we aim to gain a deeper understanding of its capabilities and limitations and make informed decisions about how best to use it. And you get to follow along."]
                } />
            </ScrollingColumn>
        } />
    )

    const mobileHowWell = (
        <TransformingTextBox positions={[27, 27]} scrollInfo={adjustedTimings[3][7]} alignment={'top'} child={
            <ScrollingColumn scrollInfo={adjustedTimings[3][13]}>
                <OpacitySubheading scrollInfo={adjustedTimings[3][2]} dark={false} text={
                    ["Where we'll play"]
                } />
                <OpacityList scrollInfo={adjustedTimings[3][2]} dark={false} text={
                    ["Customer & User Research", "Messaging, Writing & Naming", "Value Propositions & Concept Testing", "Art Direction & Design", "Asset Production", "Risk & Governance", "HR & Recruitment"]
                } />
            </ScrollingColumn>
        } />
    )

    const desktopHowWell = (
        <TransformingTextBox positions={[27, 27]} scrollInfo={adjustedTimings[3][7]} alignment={'top'} child={
            <ScrollingColumn scrollInfo={adjustedTimings[3][13]}>
                <OpacitySubheading scrollInfo={adjustedTimings[3][2]} dark={false} text={
                    ["Where we'll play"]
                } />
                <OpacityList scrollInfo={adjustedTimings[3][2]} dark={false} text={
                    ["Customer & User Research", "Messaging, Writing & Naming", "Value Propositions & Concept Testing", "Art Direction & Design", "Asset Production", "Risk & Governance", "HR & Recruitment"]
                } />
            </ScrollingColumn>
        } />
    )

    const mobileHowPlay = (
        <TransformingTextBox positions={[27, 27]} scrollInfo={adjustedTimings[3][4]} alignment={'top'} child={
            <>
                <OpacitySubheading scrollInfo={adjustedTimings[3][9]} dark={false} text={
                    ["How we'll play"]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[3][9]} dark={false} text={
                    ["A cross-functional group of Lippincotters (spanning strategy, engineering, design and more) is getting our hands in the dirt to show how we can harness the power of AI in the field of creative consulting. We’ll touch different facets of our work, from brand name generation to customer research to brand expression design and beyond."]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[3][6]} dark={false} text={
                    ["We choose creativity-led progress. We choose to believe humans and machines can be powerful together. And we choose not to talk about it from afar—but to test it out, get our hands in the sandbox, and really see what all this means."]
                } />
            </>
        } />
    );

    const desktopHowPlay = (
        <TransformingTextBox positions={[27, 27]} scrollInfo={adjustedTimings[3][4]} alignment={'top'} child={
            <ScrollingColumn scrollInfo={adjustedTimings[3][14]}>
                <OpacitySubheading scrollInfo={adjustedTimings[3][9]} dark={false} text={
                    ["How we'll play"]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[3][9]} dark={false} text={
                    ["A cross-functional group of Lippincotters (spanning strategy, engineering, design and more) is getting our hands in the dirt to show how we can harness the power of AI in the field of creative consulting. We’ll touch different facets of our work, from brand name generation to customer research to brand expression design and beyond."]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[3][9]} dark={false} text={
                    ["We choose creativity-led progress. We choose to believe humans and machines can be powerful together. And we choose not to talk about it from afar—but to test it out, get our hands in the sandbox, and really see what all this means."]
                } />
            </ScrollingColumn>
        } />
    );

    let st = startHeight / sum

    return (
        <div style={{ position: "relative", height: "100%", width: "100%" }}>

            <Transition scrollInfo={[0, st - 0.125, st- 0.075, st + 0.2]} />

            {/* SECTION 1 */}
            <Background background={"#202020"} height={sectionHeights[0]} />
            <Background background={"#202020"} height={sectionHeights[1]} />
            <Transition scrollInfo={[0.59, 0.62, 0.64, 0.7]} background={images.manifesto_gradient} solidBackground />
            {avocados}
            {introParagraphs}

            {/* SECTION 2 */}
            <Background background={images.manifesto_gradient} height={sectionHeights[2]} />
            {desktopCreativity}

            {/* SECTION 3 */}
            <Background background={images.manifesto_gradient} height={sectionHeights[3]} />
            {isMobile ? mobileRobots : desktopRobots}
            {isMobile ? mobileWeChoose : desktopWeChoose}
            {isMobile ? mobileBeach : desktopBeach}
            {isMobile ? mobileHowWell : desktopHowWell}
            {isLaptop ? mobileHowPlay : desktopHowPlay}

        </div>
    )
}