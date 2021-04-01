import { fileSelector } from 'helpers/ts/fileSelector';
import { FC } from 'react';

const Home: FC = () => {
    return (
        <div>
            <input
                type="file"
                onChange={e =>
                    fileSelector(e)
                        .then(res => {
                            console.log(res);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            />
        </div>
    );
};

Home.displayName = 'Home';
export default Home;
