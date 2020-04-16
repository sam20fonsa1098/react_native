import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'

const navigationItems = () => {
    return (
        <ul className = {classes.NavigationItems}>
            <NavigationItem link = '/' active>
                Burguer Builder
            </NavigationItem>
            <NavigationItem link = './'>
                Checkout
            </NavigationItem>
        </ul>
    );
};

export default navigationItems;