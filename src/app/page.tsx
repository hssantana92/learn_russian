import './css/cover.css';
import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import { Rubik } from 'next/font/google'
import Lessons from './(views)/categories/page';
import { redirect, RedirectType } from 'next/navigation';
 // import Font Awesome CSS
 import "@fortawesome/fontawesome-svg-core/styles.css";
 import { config } from "@fortawesome/fontawesome-svg-core";
 config.autoAddCss = false;

export default function Home() {

    // Re-direct to lights home page
    redirect('categories', RedirectType.push);
  return (
    <></>
  )
}