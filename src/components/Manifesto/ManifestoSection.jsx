// import universal
import { devices } from '../constants/devices';
import { useMediaQuery } from 'react-responsive';

// import interactions
import { Background } from '../../interactions/Background';
import { TransformingContent, ImgBox } from '../../interactions/TransformingContent'
import { TransformingTextBox } from '../../interactions/TransformingTextBox';
import { ScrollingColumn } from '../../interactions/ScrollingColumn';
import { OpacityHeading, OpacityParagraph, OpacityList, OpacitySubheading, OpacityContent } from '../../interactions/OpacityContent';

export { ManifestoSection }

function ManifestoSection({ images }) {

    const startHeight = 740
    const endblock = 1320 / window.innerHeight * 100

    //Heights
    const sectionHeights = [600, 50, 600]

    //Timings | Timings are adjusted to start - end of section
    const sectionTimings = [
        //0 P1 Motion         1 P2 Motion             2 P3 Motion              3 P4 Motion               4 P5 Motion                 5 P6 Motion           
        [[0, 1 / 7, 5 / 14], [0 / 7, 2 / 7, 8 / 14], [3 / 14, 3 / 7, 9 / 14], [5 / 14, 4 / 7, 11 / 14], [8 / 14, 11 / 14, 14 / 14], [10 / 14, 13 / 14, 15 / 14],
        //6 P1 Opacity                 7 P2 Opacity                      8 P3 Opacity                      9 P4 Opacity                       10 P5 Opacity                       11 P6 Opacity
        [0, 1 / 14, 3 / 14, 4 / 14], [1 / 14, 3 / 14, 5 / 14, 7 / 14], [3 / 14, 5 / 14, 7 / 14, 8 / 14], [5 / 14, 7 / 14, 9 / 14, 11 / 14], [7 / 14, 9 / 14, 11 / 14, 13 / 14], [9 / 14, 11 / 14, 13 / 14, 14 / 14],
        //12 Avocados 
        [1 / 14, 4 / 14, 14 / 14, 15 / 14], [1 / 14, 2 / 14, 3 / 14, 4 / 14, 5 / 14, 15 / 14]],
        // Empty
        [],
        //0 Para 1 Trans    1 robots              2 Para 2 Opacity          3 Para 3-1 Opacity       4 Para 3 Trans  5 Beach Robot       6 Para 3-3 Opacity       7 Para 2 Trans        8 Card Move 9 Para 3-2         10                   11 Beach Opacity
        [[0, 0.125, 0.33], [0, 0.18, 0.28, 0.33], [0.33, 0.46, 0.52, 0.66], [0.61, 0.66, 0.82, 1], [0.61, 0.66, 1], [0.61, 0.66, 0.82, 1], [0.61, 0.82, 0.95, 1], [0, 0.05, 0.61, 0.66], [0.75, 1], [0.61, 0.66, 0.82, 1], [0, 0.2, 0.385, 0.5], [0.6, 0.61, 0.9, 1]]]

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
                <ScrollingColumn scrollInfo={adjustedTimings[0][0]} scrollIn={false}>
                    <OpacitySubheading scrollInfo={adjustedTimings[0][6]} simpleFade={true} center baseOpacity={0} text={
                        [<p>“It will take our jobs.”<br />“It's the AI apocalypse.”<br /><br />Today, any consumer of news has seen dire predictions about Artificial Intelligence. And many people, in the creative industries and beyond, are preparing for the worst.</p>]
                    } />
                </ScrollingColumn>
            } />
            <TransformingTextBox positions={[27, 27, 27]} scrollInfo={adjustedTimings[0][2]} alignment={'top'} specialWidth={'78rem'} child={
                <ScrollingColumn scrollInfo={adjustedTimings[0][2]}>
                    <OpacitySubheading scrollInfo={adjustedTimings[0][8]} simpleFade={true} center baseOpacity={0} text={
                        [<p>And while we're all for tossing predictions around like avocado toast recipes on Instagram, what if the truth is somewhere between the fantasy and the fear mongering?</p>]
                    } />
                </ScrollingColumn>
            } />
            <TransformingTextBox positions={[27, 27, 27]} scrollInfo={adjustedTimings[0][3]} alignment={'top'} specialWidth={'115rem'} child={
                <ScrollingColumn scrollInfo={adjustedTimings[0][3]}>
                    <OpacitySubheading scrollInfo={adjustedTimings[0][9]} simpleFade={true} center baseOpacity={0} text={
                        [<p>Here's what we believe:<br /><br />Exercising caution with any new technology is necessary. But choosing to be cautiously optimistic will open up a world of possibilities for our industry. The only way to understand the potential of new tech is to dive head first and learn.<br /><br />And to learn, we must PLAY.</p>]
                    } />
                </ScrollingColumn>
            } />
            <TransformingTextBox positions={[27, 27, 27]} scrollInfo={adjustedTimings[0][4]} alignment={'top'} specialWidth={'100rem'} child={
                <ScrollingColumn scrollInfo={adjustedTimings[0][4]}>
                    <OpacitySubheading scrollInfo={adjustedTimings[0][10]} simpleFade={true} center baseOpacity={0} text={
                        [<p>It's certainly clear that AI will change how we do business. But, for anyone that has moved past worrying about doomsday scenarios into early adoption, it's also clear there will be plenty of business to do be done.</p>]
                    } />
                </ScrollingColumn>
            } />
            <TransformingTextBox positions={[27, 27, 27]} scrollInfo={adjustedTimings[0][5]} alignment={'top'} specialWidth={'93rem'} child={
                <ScrollingColumn scrollInfo={adjustedTimings[0][5]}>
                    <OpacitySubheading scrollInfo={adjustedTimings[0][11]} simpleFade={true} center baseOpacity={0} text={
                        [<p>There are plenty of things about AI we  don't know, but one thing do:<br /><br />AI is not going to take your next job, but a person who knows how to use it just might</p>]
                    } />
                </ScrollingColumn>
            } />
        </>
    )

    const avocados = (
        <>
            <OpacityContent scrollInfo={adjustedTimings[0][13]} child={<TransformingContent child={<ImgBox url={images.avocado_toast} displayDimensions={[58, 84]} rotate={0} />} positions={[[26, 26, 26, 26], [-120, 3, 3, -100]]} scrollInfo={adjustedTimings[0][12]} alignment={['left', 'bottom']} />} />
        </>
    )

    const mobileHowPlay = (
        <TransformingTextBox positions={[127, 10, -40]} scrollInfo={adjustedTimings[2][4]} alignment={'top'} child={
            <>
                <OpacitySubheading scrollInfo={adjustedTimings[2][9]} dark={false} text={
                    ["How we'll play"]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[2][9]} dark={false} text={
                    ["A cross-functional group of Lippincotters (spanning strategy, engineering, design and more) is getting our hands in the dirt to show how we can harness the power of AI in the field of creative consulting. We’ll touch different facets of our work, from brand name generation to customer research to brand expression design and beyond."]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[2][6]} dark={false} text={
                    ["We choose creativity-led progress. We choose to believe humans and machines can be powerful together. And we choose not to talk about it from afar—but to test it out, get our hands in the sandbox, and really see what all this means."]
                } />
            </>
        } />
    );

    const desktopHowPlay = (
        <TransformingTextBox positions={[127, 20, -40]} scrollInfo={adjustedTimings[2][4]} alignment={'top'} child={
            <>
                <OpacitySubheading scrollInfo={adjustedTimings[2][9]} dark={false} text={
                    ["How we'll play"]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[2][9]} dark={false} text={
                    ["A cross-functional group of Lippincotters (spanning strategy, engineering, design and more) is getting our hands in the dirt to show how we can harness the power of AI in the field of creative consulting. We’ll touch different facets of our work, from brand name generation to customer research to brand expression design and beyond."]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[2][6]} dark={false} text={
                    ["We choose creativity-led progress. We choose to believe humans and machines can be powerful together. And we choose not to talk about it from afar—but to test it out, get our hands in the sandbox, and really see what all this means."]
                } />
            </>
        } />
    );

    const mobilePara1 = (
        <></>
        // <TransformingTextBox positions={[127, 27, -150, -200]} scrollInfo={adjustedTimings[1][12]} alignment={'top'} child={
        //     <>
        //         <ImgBox url={images.avocado_toast} displayDimensions={[80, 100]} rotate={0} fixWidth={true} />

        //         <OpacityParagraph scrollInfo={adjustedTimings[1][14]} text={
        //             [["And for good reason. It has the potential to disrupt, well, everything."], ["Early adopters and businesses have flocked in, and familiar patterns have set in, powered by both the fantasy—and fear—of the unknown. With phrases like “this will take our jobs” getting tossed around Twitter like avocado toast recipes and morning news programs running full segments dedicated to the sky falling, you'd be excused for being confused or even anxious yourself. But while caution is necessary, maybe we should choose to be cautiously optimistic."]]
        //         } />
        //         <OpacityParagraph scrollInfo={adjustedTimings[1][15]} text={
        //             ["It's certainly clear that AI will change how we do business. But, for anyone that has moved past morning shows into early adoption, it’s also clear there will be plenty of business to do be done. Sure, there are still things we don't know, but there is one thing we do: AI is not going to take your next job. But a person who knows how to use it probably will."]
        //         } />
        //         <OpacitySubheading scrollInfo={adjustedTimings[1][8]} text={
        //             ["Creativity creates progress"]
        //         } />
        //         <OpacityParagraph scrollInfo={adjustedTimings[1][8]} text={
        //             ["Clamping down now is a bit like the church putting Galileo under house arrest for creating alternative models of the solar system: it’s a defensive reflex. While we can’t fully predict in abstract how AI will affect our businesses, ongoing and exploratory participation can help us determine how best to integrate it into our daily professional lives."]
        //         } />
        //         <OpacityParagraph scrollInfo={adjustedTimings[1][11]} text={
        //             ["Enough ink has been spilled on the power of AI. The disruption of AI. The hypothesis of how AI will change everything. But who’s experimenting? As creatives and consultants have a duty to chart a course beyond convention. In short, we can play."]
        //         } />
        //     </>
        // } />
    );

    const desktopPara1 = (
        <></>
        // <TransformingTextBox positions={[127, 27, -42, -100]} scrollInfo={adjustedTimings[1][10]} alignment={'top'} child={
        //     <>
        //         <OpacityParagraph scrollInfo={adjustedTimings[1][6]} text={
        //             [["And for good reason. It has the potential to disrupt, well, everything."], ["Early adopters and businesses have flocked in, and familiar patterns have set in, powered by both the fantasy—and fear—of the unknown. With phrases like “this will take our jobs” getting tossed around Twitter like avocado toast recipes and morning news programs running full segments dedicated to the sky falling, you'd be excused for being confused or even anxious yourself. But while caution is necessary, maybe we should choose to be cautiously optimistic."]]
        //         } />
        //         <OpacityParagraph scrollInfo={adjustedTimings[1][7]} text={
        //             ["It's certainly clear that AI will change how we do business. But, for anyone that has moved past morning shows into early adoption, it’s also clear there will be plenty of business to do be done. Sure, there are still things we don't know, but there is one thing we do: AI is not going to take your next job. But a person who knows how to use it probably will."]
        //         } />
        //         <OpacitySubheading scrollInfo={adjustedTimings[1][8]} text={
        //             ["Creativity creates progress"]
        //         } />
        //         <OpacityParagraph scrollInfo={adjustedTimings[1][8]} text={
        //             ["Clamping down now is a bit like the church putting Galileo under house arrest for creating alternative models of the solar system: it’s a defensive reflex. While we can’t fully predict in abstract how AI will affect our businesses, ongoing and exploratory participation can help us determine how best to integrate it into our daily professional lives."]
        //         } />
        //         <OpacityParagraph scrollInfo={adjustedTimings[1][11]} text={
        //             ["Enough ink has been spilled on the power of AI. The disruption of AI. The hypothesis of how AI will change everything. But who’s experimenting? As creatives and consultants have a duty to chart a course beyond convention. In short, we can play."]
        //         } />
        //     </>
        // } />
    )

    const mobileAvocados = (
        <></>
    );

    const desktopAvocados = (
        <>
            {/* <TransformingContent child={<BackgroundImgBox url={images.avocado_toast} displayDimensions={[57, 60]} rotate={0} />} positions={[[24, 24, 24, 24], [-100, 6, 6, 100]]} scrollInfo={adjustedTimings[1][0]} alignment={['left', 'top']} />
            <TransformingContent child={<BackgroundImgBox url={images.avocado_4} displayDimensions={[23, 40]} rotate={0} />} positions={[[5, 5, 5, 5], [-50, 3, 3, 100]]} scrollInfo={adjustedTimings[1][3]} alignment={['right', 'top']} />
            <TransformingContent child={<ImgBox url={images.avocado_1} displayDimensions={[15, 20]} rotate={25} />} positions={[[2, 2, 2, 2], [-50, 5, 5, 100]]} scrollInfo={adjustedTimings[1][1]} alignment={['right', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.avocado_2} displayDimensions={[45, 16]} rotate={0} />} positions={[[-5, -5, -5, -5], [-50, 1, 1, 100]]} scrollInfo={adjustedTimings[1][2]} alignment={['left', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.avocado_3} displayDimensions={[20, 28]} rotate={0} />} positions={[[2, 2, 2, 2], [-50, 42, 52, 152]]} scrollInfo={adjustedTimings[1][3]} alignment={['left', 'bottom']} /> */}
        </>
    );

    const mobileRobots = (
        <>
            <TransformingContent child={<ImgBox url={images.cute_robot1} displayDimensions={[50, 40]} rotate={195} />} positions={[[100, 40, 40, 100], [-50, -20, -20, -50]]} scrollInfo={adjustedTimings[2][10]} alignment={['left', 'top']} />
            <TransformingContent child={<ImgBox url={images.tin_robot3} displayDimensions={[40, 40]} rotate={30} />} positions={[[-50, -20, -20, -50], [-10, -10, -10, -10]]} scrollInfo={adjustedTimings[2][10]} alignment={['left', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.orange_robot1} displayDimensions={[45, 40]} rotate={-30} />} positions={[[100, 60, 60, 100], [-10, -10, -10, -10]]} scrollInfo={adjustedTimings[2][10]} alignment={['left', 'bottom']} />
        </>
    );

    const desktopRobots = (
        <>
            <TransformingContent child={<ImgBox url={images.cute_robot1} displayDimensions={[50, 40]} rotate={195} />} positions={[[-30, -20, -20, -30], [-50, -30, -30, -50]]} scrollInfo={adjustedTimings[2][10]} alignment={['right', 'top']} />
            <TransformingContent child={<ImgBox url={images.tin_robot3} displayDimensions={[30, 40]} rotate={30} />} positions={[[-30, -10, -10, -30], [-10, -10, -10, -10]]} scrollInfo={adjustedTimings[2][10]} alignment={['left', 'bottom']} />
            <TransformingContent child={<ImgBox url={images.orange_robot1} displayDimensions={[45, 40]} rotate={-30} />} positions={[[100, 75, 75, 100], [-20, -20, -20, -20]]} scrollInfo={adjustedTimings[2][10]} alignment={['left', 'bottom']} />
        </>
    )

    const desktopBeach = (
        <OpacityContent scrollInfo={adjustedTimings[2][11]} child={<TransformingContent child={<ImgBox url={images.robot_beach} displayDimensions={[174, 50]} rotate={0} />} positions={[[-175, -80, -40, -40], [0, 0, 0, 0]]} scrollInfo={adjustedTimings[2][5]} alignment={['left', 'bottom']} />} />
    )

    const mobileBeach = (
        <OpacityContent scrollInfo={adjustedTimings[2][11]} child={<TransformingContent child={<ImgBox url={images.robot_beach} displayDimensions={[174, 50]} rotate={0} />} positions={[[-300, -250, -200, -200], [0, 0, 0, 0]]} scrollInfo={adjustedTimings[2][5]} alignment={['left', 'bottom']} />} />
    )

    const mobileWeChoose = (
        <TransformingTextBox positions={[127, 10, 10]} scrollInfo={adjustedTimings[2][0]} alignment={'top'} child={
            <>
                <OpacitySubheading scrollInfo={adjustedTimings[2][1]} dark={false} simpleFade={true} baseOpacity={0} text={
                    ["We choose play"]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[2][1]} dark={false} simpleFade={true} baseOpacity={0} text={
                    ["These next few months, we're going deep on a grand experiment. We are still in the early stages of understanding AI and its full potential and limitations. By experimenting with AI, we aim to gain a deeper understanding of its capabilities and limitations and make informed decisions about how best to use it. And you get to follow along."]
                } />
            </>
        } />
    )

    const desktopWeChoose = (
        <TransformingTextBox positions={[127, 27, 27]} scrollInfo={adjustedTimings[2][0]} alignment={'top'} child={
            <>
                <OpacitySubheading scrollInfo={adjustedTimings[2][1]} dark={false} simpleFade={true} baseOpacity={0} text={
                    ["We choose play"]
                } />
                <OpacityParagraph scrollInfo={adjustedTimings[2][1]} dark={false} simpleFade={true} baseOpacity={0} text={
                    ["These next few months, we're going deep on a grand experiment. We are still in the early stages of understanding AI and its full potential and limitations. By experimenting with AI, we aim to gain a deeper understanding of its capabilities and limitations and make informed decisions about how best to use it. And you get to follow along."]
                } />
            </>
        } />
    )

    const mobileHowWell = (
        <TransformingTextBox positions={[10, 10, 10, -50]} scrollInfo={adjustedTimings[2][7]} alignment={'top'} child={
            <>
                <OpacitySubheading scrollInfo={adjustedTimings[2][2]} dark={false} simpleFade={true} baseOpacity={0} text={
                    ["Where we'll play"]
                } />
                <OpacityList scrollInfo={adjustedTimings[2][2]} dark={false} simpleFade={true} baseOpacity={0} text={
                    ["Customer & User Research", "Messaging, Writing & Naming", "Value Propositions & Concept Testing", "Art Direction & Design", "Asset Production", "Risk & Governance", "HR & Recruitment"]
                } />
            </>
        } />
    )

    const desktopHowWell = (
        <TransformingTextBox positions={[27, 27, 27, -50]} scrollInfo={adjustedTimings[2][7]} alignment={'top'} child={
            <>
                <OpacitySubheading scrollInfo={adjustedTimings[2][2]} dark={false} simpleFade={true} baseOpacity={0} text={
                    ["Where we'll play"]
                } />
                <OpacityList scrollInfo={adjustedTimings[2][2]} dark={false} simpleFade={true} baseOpacity={0} text={
                    ["Customer & User Research", "Messaging, Writing & Naming", "Value Propositions & Concept Testing", "Art Direction & Design", "Asset Production", "Risk & Governance", "HR & Recruitment"]
                } />
            </>
        } />
    )

    return (
        <div style={{ position: "relative", height: "100%", width: "100%" }}>

            {/* SECTION 1 */}
            <Background background={"#202020"} height={sectionHeights[0]} />
            {avocados}
            {introParagraphs}

            <Background background={"#202020"} height={sectionHeights[1]} />

            {/* SECTION 2 */}
            {isMobile ? mobilePara1 : desktopPara1}
            {isMobile ? mobileAvocados : desktopAvocados}

            {/* SECTION 3 */}
            <Background background={images.manifesto_gradient} height={sectionHeights[2]} />
            {isMobile ? mobileRobots : desktopRobots}
            {isMobile ? mobileWeChoose : desktopWeChoose}
            {isMobile ? mobileBeach : desktopBeach}
            {isMobile ? mobileHowWell : desktopHowWell}
            {isLaptop ? mobileHowPlay : desktopHowPlay}

        </div>
    )
}