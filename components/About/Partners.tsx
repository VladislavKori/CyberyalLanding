import GoogleLogo from '@/public/partners/google.png'
import WeInGames from '@/public/partners/weubganes.png'

function Partners() {
    return (
        <div className="partners">
            <h2 className="ourteam__title">Partners</h2>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "20px", marginTop: "20px"}}>
                <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none">
                    <img width="150px" src={GoogleLogo.src} alt="google-logo"/>
                </a>

                <a href="https://weingames.fi/">
                    <img width="150px" src={WeInGames.src} alt="weingames-logo"/>
                </a>
            </div>
        </div>
    )
}

export default Partners