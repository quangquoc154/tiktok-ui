import { useState, useEffect } from 'react';
import * as userService from '~/services/userService';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import styles from './Sidebar.module.scss';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const PER_PAGE = 5;

function Sidebar() {
    const [suggestedUser, setSuggestedUser] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await userService.getSuggested(1, PER_PAGE);

            setSuggestedUser(result);
        };

        fetchApi();

        // userService
        //     .getSuggested()
        //     .then((data) => {
        //         console.log({data});
        //     })
        //     .catch((error) => console.log(error))
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" data={suggestedUser} />
            <SuggestedAccounts label="Following accounts" data={suggestedUser} />
        </aside>
    );
}

export default Sidebar;
