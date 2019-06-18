import React from 'react';
import NavigationItem from '../Navigation/NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className="NavigationItems">
    <NavigationItem link="/task" active>Task</NavigationItem>
    <NavigationItem link="/new">Modal</NavigationItem>
    </ul>
);

export default navigationItems;