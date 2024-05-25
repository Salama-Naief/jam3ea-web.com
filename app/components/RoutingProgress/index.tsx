"use client";

import Router from "next/router";
import { useEffect } from "react";
import { done, start } from "nprogress";
import "nprogress/nprogress.css";

const RoutingProgress = () => {
  useEffect(() => {
    // timeout prevents shallow routing from causing the progress bar to show
    let startTimeout: number;

    const handleStart = () => {
      clearTimeout(startTimeout);
      startTimeout = window.setTimeout(start);
    };

    const handleEnd = () => {
      clearTimeout(startTimeout);
      done();
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleEnd);
    Router.events.on("routeChangeError", handleEnd);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleEnd);
      Router.events.off("routeChangeError", handleEnd);
    };
  }, []);

  return null;
};

export default RoutingProgress;
