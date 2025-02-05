// types/layoutTypes.ts
import { FontName } from "../site/fontMap";
/*
SiteConfig
|   Subdomain
|   Fonts
|   Colors
|   Expanded
|   |   name
|   |   props
|   |   |   { props for components }
|   Layout
|   |   Component
|   |   |   name
|   |   |   props
|   |   |   |   { props for components }
*/


// ----- High Level Struct ----- //

export interface SiteConfig {
    subdomain: string;
    userID: string;
    fonts: Fonts;
    colors: Colors;
    layout: LayoutComponent[];
    expandedPages: ExpandedPageComponent[];
    footer: FooterComponent;
}
// ----- ----- ----- //



// ----- Site Styles ----- //

export interface Fonts {
    title: FontName;
    text: FontName;
}

export interface Colors {
    primary: string;
    accent:string;
    background: string;
    text: string;
}
// ----- ----- ----- //



// ----- Site Components ----- //

export interface FooterComponent {
    links: FooterComponentProps;
}

export interface FooterComponentProps {
    email?: string;
    instagram: string;
    facebook: string;
}

export interface LayoutComponent {
    component: string;
    props: ComponentProps;
}

export interface ComponentProps {
    [key: string]: any;
}

export interface HeroSectionProps extends ComponentProps {
    logo: string;
    text: string;
    image: string;
    buttonText: string;
    buttonLink: string;
    siteSections: string[];
}

export interface MovingCardsProps extends ComponentProps {
    aboutText: string;
    imageArr: string[];
}

export interface InfoScrollProps extends ComponentProps {
    numblocks: number;
    blockArr: InfoBlock[];
}

export interface InfoBlock {
    id: string;
    title: string;
    text: string;
    image: string;
    buttonlinkText?: string;
    buttonLinkURL?: string;
    buttonExpandedPage?: string;
}
// ----- ----- ----- //



// ----- Expanded Pages Components ----- //

export interface ExpandedPageComponent {
    component: string;
    props: ExpandedPagesProps
}

export interface ExpandedPagesProps {
    [key: string]: any;
}

export interface ExpandedEventProps extends ExpandedPagesProps {
    title: string;
    eventBlock: EventBlock[];
}

export interface EventBlock {
    eventTitle: string;
    eventDate: Date;
    eventTime: {
        start: string;
        end?: string;
    };
    eventCost: string;
    eventDescription: string;
    eventLocation: string;
}

export interface ExpandedMembershipProps extends ExpandedPagesProps {
    descrition: string
    link: string
    buttonText: string
    buttonLink: string
}

export interface ExpandedTripProps extends ExpandedPagesProps {
    title: string;
    description: string;
    tripBlock: TripBlock[];
}

export interface TripBlock {
    tripTitle: string;
    tripDescription: string;
    tripLocation: string;
    tripDates: string;
    tripImage: string;
    tripCost: string;
}

export interface ExpandedExecProps extends ExpandedPagesProps {
    title: string;
    execBlock: ExecBlock[];
}

export interface ExecBlock {
    image: string;
    name: string;
    role: string;
    bio: string;
    instaURL: string;
}