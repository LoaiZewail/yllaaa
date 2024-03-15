import style from "../style.module.scss";

export default function People() {

    return (
        <div className={style.People}>
            <div className={style.People__column}>
                <div className={style.People__column__card}>
                    <div className={style.People__column__card__img} style={{ borderRadius: "150px 0px 0px 150px" }}>
                        <img src="/images/avatar.png" />
                    </div>
                    <h3>sd</h3>
                    <h5>dwer</h5>
                </div>
            </div>
            <div className={style.People__column}>
                <div className={style.People__column__card}>
                    <div className={style.People__column__card__img} style={{ borderRadius: "150px  150px 0px 0px" }}>
                        <img src="/images/avatar.png" />
                    </div>
                    <h3>sd</h3>
                    <h5>dwer</h5>
                </div>
                <div className={style.People__column__card}>
                    <div className={style.People__column__card__img} style={{ borderRadius: "50%" }}>
                        <img src="/images/avatar.png" />
                    </div>
                    <h3>sd</h3>
                    <h5>dwer</h5>
                </div>
            </div>
            <div className={style.People__column}>
                <div className={style.People__column__card}>
                    <div className={style.People__column__card__img} style={{ borderRadius: "150px 0px 0px 150px" }}>
                        <img src="/images/avatar.png" />
                    </div>
                    <h3>sd</h3>
                    <h5>dwer</h5>
                </div>
            </div>
            <div className={style.People__column}>
                <div className={style.People__column__card}>
                    <div className={style.People__column__card__img} style={{ borderRadius: "50%" }}>
                        <img src="/images/avatar.png" />
                    </div>
                    <h3>sd</h3>
                    <h5>dwer</h5>
                </div>
                <div className={style.People__column__card}>
                    <div className={style.People__column__card__img} style={{ borderRadius: "0px 0px 150px 150px " }}>
                        <img src="/images/avatar.png" />
                    </div>
                    <h3>sd</h3>
                    <h5>dwer</h5>
                </div>
            </div>
            <div className={style.People__column}>
                <div className={style.People__column__card}>
                    <div className={style.People__column__card__img} style={{ borderRadius: "0px 150px 150px 0px " }}>
                        <img src="/images/avatar.png" />
                    </div>
                    <h3>sd</h3>
                    <h5>dwer</h5>
                </div>
            </div>
        </div>
    )
}
