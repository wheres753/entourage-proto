import { SiteConfig, HeroSectionProps, MovingCardsProps, InfoScrollProps } from './types/layoutTypes';

interface ClubData {
    clubName: string;
    clubPurpose: string;
    clubVibe: string;
}
  
interface ImageData {
    largeImageURL: string;
}
  
interface GenerateContent {
    clubCopy: {
        [key: string]: string;
    };
    clubImages: {
        message: ImageData[];
    };
}

export function getSiteConfigFromQuiz(clubData: ClubData, genContent: GenerateContent): SiteConfig {

    const siteConfig: SiteConfig = {
        layout: [
            {
                component: "HeroSection",
                props: {
                    text: clubData.clubName,
                    image: genContent.clubImages.message[0].largeImageURL,
                    textColor: "text-entourage-blue",
                    textOpacity: "text-opacity-40",
                } as HeroSectionProps
            },
            {
                component: "MovingCards",
                props: {
                    imageArr: genContent.clubImages.message.slice(1, 7).map(img => img.largeImageURL),
                    aboutText: genContent.clubCopy['About Us'],
                    textColor: "text-entourage-blue",
                    textOpacity: "text-opacity-40",
                } as MovingCardsProps
            },
            {
                component: "InfoScroll",
                props: {
                    numblocks: 6,
                    blockArr: [
                        { title: "Memberships", text: genContent.clubCopy.Memberships, image: genContent.clubImages.message[1].largeImageURL },
                        { title: "Events", text: genContent.clubCopy.Events, image: genContent.clubImages.message[2].largeImageURL },
                        { title: "Trips", text: genContent.clubCopy.Trips, image: genContent.clubImages.message[3].largeImageURL },
                        { title: "Parties", text: genContent.clubCopy.Parties, image: genContent.clubImages.message[4].largeImageURL },
                        { title: "Culture", text: genContent.clubCopy.Culture, image: genContent.clubImages.message[5].largeImageURL },
                        { title: "Executive Team", text: genContent.clubCopy['Executive Team'], image: genContent.clubImages.message[6].largeImageURL },
                    ],
                } as InfoScrollProps
            }
        ]
    };

    return siteConfig;
}