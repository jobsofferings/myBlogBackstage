import defaultImg from '../../img/default.png'
import darkImg from '../../img/dark.png'

interface ThemeItemProps {
    img: any,
    themeTitle: string,
    style: MyDefinedStyle
}

interface MyDefinedStyle {
    backStyle: React.CSSProperties,
    jobsStyle: React.CSSProperties,
    MenuStyle: React.CSSProperties,
}

const themeList: ThemeItemProps[] = [
    {
        img: defaultImg,
        themeTitle: 'default',
        style: {
            backStyle: {
                backgroundColor: '#F4F7Fc'
            },
            jobsStyle: {
                backgroundColor: '#000000'
            },
            MenuStyle: {
                backgroundColor: 'rgba(27, 29, 93, .5)'
            }
        }
    }, {
        img: darkImg,
        themeTitle: 'dark',
        style: {
            backStyle: {
                backgroundColor: '#252525'
            },
            jobsStyle: {
                backgroundColor: '#ffffff'
            },
            MenuStyle: {
                backgroundColor: 'rgba(255, 255, 255, .5)'
            }
        }
    }
]

export default themeList;