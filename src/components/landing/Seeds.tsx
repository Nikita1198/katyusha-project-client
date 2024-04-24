import Typography from "@mui/material/Typography/Typography";
import React from "react";
import StartButton from "./ui/StartButton";
import { Link } from "react-router-dom";

export default function Seeds() {
  return (
    <section
      style={{ position: "relative", height: "100vh" }}
      data-aos-easing="ease-in-back"
      data-aos="fade-up"
      data-aos-delay="200"
      className="bg-trading-tools relative max-w-full sm:mx-4 my-20 py-16 shadow rounded-2xl overflow-hidden bg-white/90">
      <div className="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" className="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <h2 className="text-4xl font-semibold">Advanced Trading <span className="text-header-gradient">Tools</span></h2>
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Professional Access, Non-stop Availability</h4>
            <p className="paragraph text-sm xl:text-base">
              We provide premium access to crypto trading for both individuals and institutions through high liquidity,
              reliable order execution and constant uptime.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium">A Range of Powerful Apis</h4>
            <p className="paragraph text-sm xl:text-base">
              Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and
              HTTP APIs. Connect to our WebSocket for real-time data streaming.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Customer Support</h4>
            <p className="paragraph text-sm xl:text-base">
              Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers
              for partners.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row">
          </div>
          <div className="col-span-12 lg:col-span-6" v-bind="$attrs">
            <div className="w-full sm:mt-20 xl:mt-0">
              <img src="..\images\logos-kk.webp" className="w-full" alt="Logo" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
