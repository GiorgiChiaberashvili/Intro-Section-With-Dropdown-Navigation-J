import databiz from '../images/client-databiz.svg'
import audiophile from '../images/client-audiophile.svg'
import meet from '../images/client-meet.svg'
import maker from '../images/client-maker.svg'
import desktop from '../images/image-hero-desktop.png'
import mobile from '../images/image-hero-mobile.png'
import '../css/index.css'
import '../css/queries.css'



function Main() {
    return (
        <div className='main'>
            <div className='left'>
                <h1>
                    Make remote work
                </h1>
                <h5>
                    Get your team in sync, no matter your location.
                    Streamline processes, create team rituals,
                    and watch productivity soar.
                </h5>

                <button className='learn'>Learn more</button>
                <div className='foot'>
                    <img src={databiz} />
                    <img src={audiophile} />
                    <img src={meet} />
                    <img src={maker} />
                </div>
            </div>
            <div className='right'>
                <img src={desktop} className='desktopimage' />
                <img src={mobile} className='mobile_image' />
            </div>

        </div>
    );
}

export default Main;