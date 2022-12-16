import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.company}>
            GHOST<span>DRIVE</span>
          </div>
          <div className={styles.nft_pass}>
            <div
              className={styles.key}
              onClick={() => {
                navigate('/ghost-drive-nft-card/nft');
              }}
            >
              NFT<span>PASS</span>
            </div>
            <div className={styles.value}>18, 888</div>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.boarding}>
            <div className={styles.keys}>
              <div>BOARDING</div>
              <div>/ FIRST WAVE</div>
            </div>
            <div className={styles.values}>
              <div>0.01%</div>
              <div>5D:22:22:04:01</div>
            </div>
          </div>
          <div className={styles.features}>
            <div>FEATURES</div>
            <div>PRODUCT \</div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.statistics_left}>
            <div className={styles.keys}>
              <div>USERS</div>
              <div>POINTS</div>
              <div>REWARDS</div>
            </div>
            <div className={styles.progress}>
              <div />
              <div />
              <div />
            </div>
            <div className={styles.values}>
              <div>18,888 / 2,320</div>
              <div>180,888</div>
              <div>4,454</div>
            </div>
          </div>
          <div className={styles.metamask_login}>
            <div className={styles.date}>12.22.22</div>
            <div className={styles.login}>LOGIN</div>
            <div className={styles.line} />
            <div className={styles.metamask}>METAMASK</div>
            <div className={styles.logo} />
          </div>
          <div className={styles.statistics_right}>
            <div className={styles.values}>
              <div>1.2PT</div>
              <div>33,332</div>
              <div>43,534,34</div>
            </div>
            <div className={styles.progress}>
              <div />
              <div />
              <div />
            </div>
            <div className={styles.keys}>
              <div>STORAGE</div>
              <div>TOKENIZER</div>
              <div>AI IMAGES</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
