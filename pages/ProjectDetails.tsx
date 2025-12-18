import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Section } from "../components/Section";
import { ExternalLink, Eye, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SEO } from "../components/SEO";

// Nexus Images
import boldpath1 from "../components/assets/portfolios/brand identity/boldpath/1.jpg";
import boldpath2 from "../components/assets/portfolios/brand identity/boldpath/2.jpg";
import boldpath3 from "../components/assets/portfolios/brand identity/boldpath/3.jpg";
import boldpath4 from "../components/assets/portfolios/brand identity/boldpath/4.jpg";
import boldpath5 from "../components/assets/portfolios/brand identity/boldpath/5.jpg";
import boldpath6 from "../components/assets/portfolios/brand identity/boldpath/6.jpg";
import boldpath7 from "../components/assets/portfolios/brand identity/boldpath/7.jpg";
import boldpath8 from "../components/assets/portfolios/brand identity/boldpath/8.jpg";
import boldpath9 from "../components/assets/portfolios/brand identity/boldpath/9.jpg";
import boldpath10 from "../components/assets/portfolios/brand identity/boldpath/10.jpg";
import boldpath11 from "../components/assets/portfolios/brand identity/boldpath/11.jpg";
import boldpath12 from "../components/assets/portfolios/brand identity/boldpath/12.jpg";
import boldpath13 from "../components/assets/portfolios/brand identity/boldpath/13.jpg";
import boldpath14 from "../components/assets/portfolios/brand identity/boldpath/14.jpg";
import boldpath15 from "../components/assets/portfolios/brand identity/boldpath/15.jpg";
import boldpath16 from "../components/assets/portfolios/brand identity/boldpath/16.jpg";
import boldpath17 from "../components/assets/portfolios/brand identity/boldpath/17.jpg";
import boldpath18 from "../components/assets/portfolios/brand identity/boldpath/18.jpg";
import boldpath19 from "../components/assets/portfolios/brand identity/boldpath/19.jpg";
import boldpath20 from "../components/assets/portfolios/brand identity/boldpath/20.jpg";
import boldpath21 from "../components/assets/portfolios/brand identity/boldpath/21.jpg";
import boldpath22 from "../components/assets/portfolios/brand identity/boldpath/22.jpg";
import boldpath23 from "../components/assets/portfolios/brand identity/boldpath/23.jpg";
import boldpath24 from "../components/assets/portfolios/brand identity/boldpath/24.jpg";
import boldpath25 from "../components/assets/portfolios/brand identity/boldpath/25.jpg";
import boldpath26 from "../components/assets/portfolios/brand identity/boldpath/26.jpg";
import boldpath27 from "../components/assets/portfolios/brand identity/boldpath/27.jpg";
import boldpath28 from "../components/assets/portfolios/brand identity/boldpath/28.jpg";
import boldpath29 from "../components/assets/portfolios/brand identity/boldpath/29.jpg";
import boldpath30 from "../components/assets/portfolios/brand identity/boldpath/30.jpg";
import boldpath31 from "../components/assets/portfolios/brand identity/boldpath/31.jpg";
import boldpath32 from "../components/assets/portfolios/brand identity/boldpath/32.jpg";
import boldpath33 from "../components/assets/portfolios/brand identity/boldpath/33.jpg";
import boldpath34 from "../components/assets/portfolios/brand identity/boldpath/34.jpg";
import boldpath35 from "../components/assets/portfolios/brand identity/boldpath/35.jpg";
import boldpath36 from "../components/assets/portfolios/brand identity/boldpath/36.jpg";
import boldpath37 from "../components/assets/portfolios/brand identity/boldpath/37.jpg";
import boldpath38 from "../components/assets/portfolios/brand identity/boldpath/38.jpg";
import boldpath39 from "../components/assets/portfolios/brand identity/boldpath/39.jpg";
import boldpath40 from "../components/assets/portfolios/brand identity/boldpath/40.jpg";
import boldpath41 from "../components/assets/portfolios/brand identity/boldpath/41.jpg";
import boldpath42 from "../components/assets/portfolios/brand identity/boldpath/42.jpg";
import boldpath43 from "../components/assets/portfolios/brand identity/boldpath/43.jpg";
import boldpath44 from "../components/assets/portfolios/brand identity/boldpath/44.jpg";
import boldpath45 from "../components/assets/portfolios/brand identity/boldpath/45.jpg";
import boldpath46 from "../components/assets/portfolios/brand identity/boldpath/46.jpg";
import boldpath47 from "../components/assets/portfolios/brand identity/boldpath/47.jpg";

// nexus
import nexus1 from "../components/assets/portfolios/brand identity/nexus/1.jpg";
import nexus2 from "../components/assets/portfolios/brand identity/nexus/2.jpg";
import nexus3 from "../components/assets/portfolios/brand identity/nexus/3.jpg";
import nexus4 from "../components/assets/portfolios/brand identity/nexus/4.jpg";
import nexus5 from "../components/assets/portfolios/brand identity/nexus/5.jpg";
import nexus6 from "../components/assets/portfolios/brand identity/nexus/6.jpg";
import nexus7 from "../components/assets/portfolios/brand identity/nexus/7.jpg";
import nexus8 from "../components/assets/portfolios/brand identity/nexus/8.jpg";
import nexus9 from "../components/assets/portfolios/brand identity/nexus/9.jpg";
import nexus10 from "../components/assets/portfolios/brand identity/nexus/10.jpg";
import nexus11 from "../components/assets/portfolios/brand identity/nexus/11.jpg";
import nexus12 from "../components/assets/portfolios/brand identity/nexus/12.jpg";
import nexus13 from "../components/assets/portfolios/brand identity/nexus/13.jpg";
import nexus14 from "../components/assets/portfolios/brand identity/nexus/14.jpg";
import nexus15 from "../components/assets/portfolios/brand identity/nexus/15.jpg";
import nexus16 from "../components/assets/portfolios/brand identity/nexus/16.jpg";
import nexus17 from "../components/assets/portfolios/brand identity/nexus/17.jpg";
import nexus18 from "../components/assets/portfolios/brand identity/nexus/18.jpg";
import nexus19 from "../components/assets/portfolios/brand identity/nexus/19.jpg";
import nexus20 from "../components/assets/portfolios/brand identity/nexus/20.jpg";
import nexus21 from "../components/assets/portfolios/brand identity/nexus/21.jpg";
import nexus22 from "../components/assets/portfolios/brand identity/nexus/22.jpg";
import nexus23 from "../components/assets/portfolios/brand identity/nexus/23.jpg";
import nexus24 from "../components/assets/portfolios/brand identity/nexus/24.jpg";
import nexus25 from "../components/assets/portfolios/brand identity/nexus/25.jpg";
import nexus26 from "../components/assets/portfolios/brand identity/nexus/26.jpg";

// arborsphere

import arborsphere1 from "../components/assets/portfolios/brand identity/arborsphere/1.jpg";
import arborsphere2 from "../components/assets/portfolios/brand identity/arborsphere/2.jpg";
import arborsphere3 from "../components/assets/portfolios/brand identity/arborsphere/3.jpg";
import arborsphere4 from "../components/assets/portfolios/brand identity/arborsphere/4.jpg";
import arborsphere5 from "../components/assets/portfolios/brand identity/arborsphere/5.jpg";
import arborsphere6 from "../components/assets/portfolios/brand identity/arborsphere/6.jpg";
import arborsphere7 from "../components/assets/portfolios/brand identity/arborsphere/7.jpg";
import arborsphere8 from "../components/assets/portfolios/brand identity/arborsphere/8.jpg";
import arborsphere9 from "../components/assets/portfolios/brand identity/arborsphere/9.jpg";
import arborsphere10 from "../components/assets/portfolios/brand identity/arborsphere/10.jpg";
import arborsphere11 from "../components/assets/portfolios/brand identity/arborsphere/11.jpg";
import arborsphere12 from "../components/assets/portfolios/brand identity/arborsphere/12.jpg";
import arborsphere13 from "../components/assets/portfolios/brand identity/arborsphere/13.jpg";
import arborsphere14 from "../components/assets/portfolios/brand identity/arborsphere/14.jpg";
import arborsphere15 from "../components/assets/portfolios/brand identity/arborsphere/15.jpg";
import arborsphere16 from "../components/assets/portfolios/brand identity/arborsphere/16.jpg";
import arborsphere17 from "../components/assets/portfolios/brand identity/arborsphere/17.jpg";
import arborsphere18 from "../components/assets/portfolios/brand identity/arborsphere/18.jpg";
import arborsphere19 from "../components/assets/portfolios/brand identity/arborsphere/19.jpg";
import arborsphere20 from "../components/assets/portfolios/brand identity/arborsphere/20.jpg";
import arborsphere21 from "../components/assets/portfolios/brand identity/arborsphere/21.jpg";
import arborsphere22 from "../components/assets/portfolios/brand identity/arborsphere/22.jpg";
import arborsphere23 from "../components/assets/portfolios/brand identity/arborsphere/23.jpg";
import arborsphere24 from "../components/assets/portfolios/brand identity/arborsphere/24.jpg";
import arborsphere25 from "../components/assets/portfolios/brand identity/arborsphere/25.jpg";
import arborsphere26 from "../components/assets/portfolios/brand identity/arborsphere/26.jpg";

// cloudman
import cloudman1 from "../components/assets/portfolios/brand identity/cloudman/1.jpg";
import cloudman2 from "../components/assets/portfolios/brand identity/cloudman/2.jpg";
import cloudman3 from "../components/assets/portfolios/brand identity/cloudman/3.jpg";
import cloudman4 from "../components/assets/portfolios/brand identity/cloudman/4.jpg";
import cloudman5 from "../components/assets/portfolios/brand identity/cloudman/5.jpg";
import cloudman6 from "../components/assets/portfolios/brand identity/cloudman/6.jpg";
import cloudman7 from "../components/assets/portfolios/brand identity/cloudman/7.jpg";
import cloudman8 from "../components/assets/portfolios/brand identity/cloudman/8.jpg";
import cloudman9 from "../components/assets/portfolios/brand identity/cloudman/9.jpg";
import cloudman10 from "../components/assets/portfolios/brand identity/cloudman/10.jpg";
import cloudman11 from "../components/assets/portfolios/brand identity/cloudman/11.jpg";

// d
import dynamic1 from "../components/assets/portfolios/brand identity/dynamic/1.jpg";
import dynamic2 from "../components/assets/portfolios/brand identity/dynamic/2.jpg";
import dynamic3 from "../components/assets/portfolios/brand identity/dynamic/3.jpg";
import dynamic5 from "../components/assets/portfolios/brand identity/dynamic/5.jpg";
import dynamic4 from "../components/assets/portfolios/brand identity/dynamic/4.jpg";
import dynamic6 from "../components/assets/portfolios/brand identity/dynamic/6.jpg";
import dynamic7 from "../components/assets/portfolios/brand identity/dynamic/7.jpg";
import dynamic8 from "../components/assets/portfolios/brand identity/dynamic/8.jpg";
import dynamic9 from "../components/assets/portfolios/brand identity/dynamic/9.jpg";
import dynamic10 from "../components/assets/portfolios/brand identity/dynamic/10.jpg";
import dynamic11 from "../components/assets/portfolios/brand identity/dynamic/11.jpg";
import dynamic12 from "../components/assets/portfolios/brand identity/dynamic/12.jpg";

// ecogrow
import ecogrow1 from "../components/assets/portfolios/brand identity/ecogrow/1.jpg";
import ecogrow2 from "../components/assets/portfolios/brand identity/ecogrow/2.jpg";
import ecogrow3 from "../components/assets/portfolios/brand identity/ecogrow/3.jpg";
import ecogrow4 from "../components/assets/portfolios/brand identity/ecogrow/4.jpg";
import ecogrow5 from "../components/assets/portfolios/brand identity/ecogrow/5.jpg";
import ecogrow6 from "../components/assets/portfolios/brand identity/ecogrow/6.jpg";
import ecogrow7 from "../components/assets/portfolios/brand identity/ecogrow/7.jpg";
import ecogrow8 from "../components/assets/portfolios/brand identity/ecogrow/8.jpg";
import ecogrow9 from "../components/assets/portfolios/brand identity/ecogrow/9.jpg";
import ecogrow10 from "../components/assets/portfolios/brand identity/ecogrow/10.jpg";
import ecogrow11 from "../components/assets/portfolios/brand identity/ecogrow/11.jpg";
import ecogrow12 from "../components/assets/portfolios/brand identity/ecogrow/12.jpg";
import ecogrow13 from "../components/assets/portfolios/brand identity/ecogrow/13.jpg";
import ecogrow14 from "../components/assets/portfolios/brand identity/ecogrow/14.jpg";
import ecogrow15 from "../components/assets/portfolios/brand identity/ecogrow/15.jpg";
import ecogrow16 from "../components/assets/portfolios/brand identity/ecogrow/16.jpg";

// greenbloom
import greenbloom1 from "../components/assets/portfolios/brand identity/greenbloom/1.jpg";
import greenbloom2 from "../components/assets/portfolios/brand identity/greenbloom/2.jpg";
import greenbloom3 from "../components/assets/portfolios/brand identity/greenbloom/3.jpg";
import greenbloom4 from "../components/assets/portfolios/brand identity/greenbloom/4.jpg";
import greenbloom5 from "../components/assets/portfolios/brand identity/greenbloom/5.jpg";
import greenbloom6 from "../components/assets/portfolios/brand identity/greenbloom/6.jpg";
import greenbloom7 from "../components/assets/portfolios/brand identity/greenbloom/7.jpg";
import greenbloom8 from "../components/assets/portfolios/brand identity/greenbloom/8.jpg";
import greenbloom9 from "../components/assets/portfolios/brand identity/greenbloom/9.jpg";
import greenbloom10 from "../components/assets/portfolios/brand identity/greenbloom/10.jpg";
import greenbloom11 from "../components/assets/portfolios/brand identity/greenbloom/11.jpg";
import greenbloom12 from "../components/assets/portfolios/brand identity/greenbloom/12.jpg";
import greenbloom13 from "../components/assets/portfolios/brand identity/greenbloom/13.jpg";
import greenbloom14 from "../components/assets/portfolios/brand identity/greenbloom/14.jpg";
import greenbloom15 from "../components/assets/portfolios/brand identity/greenbloom/15.jpg";
import greenbloom16 from "../components/assets/portfolios/brand identity/greenbloom/16.jpg";
import greenbloom17 from "../components/assets/portfolios/brand identity/greenbloom/17.jpg";
import greenbloom18 from "../components/assets/portfolios/brand identity/greenbloom/18.jpg";
import greenbloom19 from "../components/assets/portfolios/brand identity/greenbloom/19.jpg";
import greenbloom20 from "../components/assets/portfolios/brand identity/greenbloom/20.jpg";
import greenbloom21 from "../components/assets/portfolios/brand identity/greenbloom/21.jpg";
import greenbloom22 from "../components/assets/portfolios/brand identity/greenbloom/22.jpg";
import greenbloom23 from "../components/assets/portfolios/brand identity/greenbloom/23.jpg";
import greenbloom24 from "../components/assets/portfolios/brand identity/greenbloom/24.jpg";
import greenbloom25 from "../components/assets/portfolios/brand identity/greenbloom/25.jpg";
import greenbloom26 from "../components/assets/portfolios/brand identity/greenbloom/26.jpg";

// meloplay
import meloplay1 from "../components/assets/portfolios/brand identity/meloplay/1.jpg";
import meloplay2 from "../components/assets/portfolios/brand identity/meloplay/2.jpg";
import meloplay3 from "../components/assets/portfolios/brand identity/meloplay/3.jpg";
import meloplay4 from "../components/assets/portfolios/brand identity/meloplay/4.jpg";
import meloplay5 from "../components/assets/portfolios/brand identity/meloplay/5.jpg";
import meloplay6 from "../components/assets/portfolios/brand identity/meloplay/6.jpg";
import meloplay7 from "../components/assets/portfolios/brand identity/meloplay/7.jpg";
import meloplay8 from "../components/assets/portfolios/brand identity/meloplay/8.jpg";
import meloplay9 from "../components/assets/portfolios/brand identity/meloplay/9.jpg";
import meloplay10 from "../components/assets/portfolios/brand identity/meloplay/10.jpg";
import meloplay11 from "../components/assets/portfolios/brand identity/meloplay/11.jpg";
import meloplay12 from "../components/assets/portfolios/brand identity/meloplay/12.jpg";
import meloplay13 from "../components/assets/portfolios/brand identity/meloplay/13.jpg";
import meloplay14 from "../components/assets/portfolios/brand identity/meloplay/14.jpg";

// momentum
import momentum1 from "../components/assets/portfolios/brand identity/momentum/1.jpg";
import momentum2 from "../components/assets/portfolios/brand identity/momentum/2.jpg";
import momentum3 from "../components/assets/portfolios/brand identity/momentum/3.jpg";
import momentum4 from "../components/assets/portfolios/brand identity/momentum/4.jpg";
import momentum5 from "../components/assets/portfolios/brand identity/momentum/5.jpg";
import momentum6 from "../components/assets/portfolios/brand identity/momentum/6.jpg";
import momentum7 from "../components/assets/portfolios/brand identity/momentum/7.jpg";
import momentum8 from "../components/assets/portfolios/brand identity/momentum/8.jpg";
import momentum9 from "../components/assets/portfolios/brand identity/momentum/9.jpg";
import momentum10 from "../components/assets/portfolios/brand identity/momentum/10.jpg";
import momentum11 from "../components/assets/portfolios/brand identity/momentum/11.jpg";
import momentum12 from "../components/assets/portfolios/brand identity/momentum/12.jpg";
import momentum13 from "../components/assets/portfolios/brand identity/momentum/13.jpg";
import momentum14 from "../components/assets/portfolios/brand identity/momentum/14.jpg";
import momentum15 from "../components/assets/portfolios/brand identity/momentum/15.jpg";
import momentum16 from "../components/assets/portfolios/brand identity/momentum/16.jpg";
import momentum17 from "../components/assets/portfolios/brand identity/momentum/17.jpg";
import momentum18 from "../components/assets/portfolios/brand identity/momentum/18.jpg";
import momentum19 from "../components/assets/portfolios/brand identity/momentum/19.jpg";
import momentum20 from "../components/assets/portfolios/brand identity/momentum/20.jpg";
import momentum21 from "../components/assets/portfolios/brand identity/momentum/21.jpg";
import momentum22 from "../components/assets/portfolios/brand identity/momentum/22.jpg";

// pplayer
import pplayer1 from "../components/assets/portfolios/brand identity/pplayer/1.jpg";
import pplayer2 from "../components/assets/portfolios/brand identity/pplayer/2.jpg";
import pplayer3 from "../components/assets/portfolios/brand identity/pplayer/3.jpg";
import pplayer4 from "../components/assets/portfolios/brand identity/pplayer/4.jpg";
import pplayer5 from "../components/assets/portfolios/brand identity/pplayer/5.jpg";
import pplayer6 from "../components/assets/portfolios/brand identity/pplayer/6.jpg";
import pplayer7 from "../components/assets/portfolios/brand identity/pplayer/7.jpg";
import pplayer8 from "../components/assets/portfolios/brand identity/pplayer/8.jpg";
import pplayer9 from "../components/assets/portfolios/brand identity/pplayer/9.jpg";
import pplayer10 from "../components/assets/portfolios/brand identity/pplayer/10.jpg";
import pplayer11 from "../components/assets/portfolios/brand identity/pplayer/11.jpg";
import pplayer12 from "../components/assets/portfolios/brand identity/pplayer/12.jpg";
import pplayer13 from "../components/assets/portfolios/brand identity/pplayer/13.jpg";
import pplayer14 from "../components/assets/portfolios/brand identity/pplayer/14.jpg";
import pplayer15 from "../components/assets/portfolios/brand identity/pplayer/15.jpg";
import pplayer16 from "../components/assets/portfolios/brand identity/pplayer/16.jpg";

// ranova
import ranova1 from "../components/assets/portfolios/brand identity/ranova/1.jpg";
import ranova2 from "../components/assets/portfolios/brand identity/ranova/2.jpg";
import ranova3 from "../components/assets/portfolios/brand identity/ranova/3.jpg";
import ranova4 from "../components/assets/portfolios/brand identity/ranova/4.jpg";
import ranova5 from "../components/assets/portfolios/brand identity/ranova/5.jpg";
import ranova6 from "../components/assets/portfolios/brand identity/ranova/6.jpg";
import ranova7 from "../components/assets/portfolios/brand identity/ranova/7.jpg";
import ranova8 from "../components/assets/portfolios/brand identity/ranova/8.jpg";
import ranova9 from "../components/assets/portfolios/brand identity/ranova/9.jpg";
import ranova10 from "../components/assets/portfolios/brand identity/ranova/10.jpg";
import ranova11 from "../components/assets/portfolios/brand identity/ranova/11.jpg";
import ranova12 from "../components/assets/portfolios/brand identity/ranova/12.jpg";
import ranova13 from "../components/assets/portfolios/brand identity/ranova/13.jpg";
import ranova14 from "../components/assets/portfolios/brand identity/ranova/14.jpg";
import ranova15 from "../components/assets/portfolios/brand identity/ranova/15.jpg";
import ranova16 from "../components/assets/portfolios/brand identity/ranova/16.jpg";
import ranova17 from "../components/assets/portfolios/brand identity/ranova/17.jpg";
import ranova18 from "../components/assets/portfolios/brand identity/ranova/18.jpg";
import ranova19 from "../components/assets/portfolios/brand identity/ranova/19.jpg";
import ranova20 from "../components/assets/portfolios/brand identity/ranova/20.jpg";
import ranova21 from "../components/assets/portfolios/brand identity/ranova/21.jpg";
import ranova22 from "../components/assets/portfolios/brand identity/ranova/22.jpg";
import ranova23 from "../components/assets/portfolios/brand identity/ranova/23.jpg";

// uniflora
import uniflora1 from "../components/assets/portfolios/brand identity/uniflora/1.jpg";
import uniflora2 from "../components/assets/portfolios/brand identity/uniflora/2.jpg";
import uniflora3 from "../components/assets/portfolios/brand identity/uniflora/3.jpg";
import uniflora4 from "../components/assets/portfolios/brand identity/uniflora/4.jpg";
import uniflora5 from "../components/assets/portfolios/brand identity/uniflora/5.jpg";
import uniflora6 from "../components/assets/portfolios/brand identity/uniflora/6.jpg";
import uniflora7 from "../components/assets/portfolios/brand identity/uniflora/7.jpg";
import uniflora8 from "../components/assets/portfolios/brand identity/uniflora/8.jpg";
import uniflora9 from "../components/assets/portfolios/brand identity/uniflora/9.jpg";
import uniflora10 from "../components/assets/portfolios/brand identity/uniflora/10.jpg";
import uniflora11 from "../components/assets/portfolios/brand identity/uniflora/11.jpg";
import uniflora12 from "../components/assets/portfolios/brand identity/uniflora/12.jpg";
import uniflora13 from "../components/assets/portfolios/brand identity/uniflora/13.jpg";
import uniflora14 from "../components/assets/portfolios/brand identity/uniflora/14.jpg";
import uniflora15 from "../components/assets/portfolios/brand identity/uniflora/15.jpg";
import uniflora16 from "../components/assets/portfolios/brand identity/uniflora/16.jpg";
import uniflora17 from "../components/assets/portfolios/brand identity/uniflora/17.jpg";

// winnest
import winnest1 from "../components/assets/portfolios/brand identity/winnest/1.jpg";
import winnest2 from "../components/assets/portfolios/brand identity/winnest/2.jpg";
import winnest3 from "../components/assets/portfolios/brand identity/winnest/3.jpg";
import winnest4 from "../components/assets/portfolios/brand identity/winnest/4.jpg";
import winnest5 from "../components/assets/portfolios/brand identity/winnest/5.jpg";
import winnest6 from "../components/assets/portfolios/brand identity/winnest/6.jpg";
import winnest7 from "../components/assets/portfolios/brand identity/winnest/7.jpg";
import winnest8 from "../components/assets/portfolios/brand identity/winnest/8.jpg";
import winnest9 from "../components/assets/portfolios/brand identity/winnest/9.jpg";
import winnest10 from "../components/assets/portfolios/brand identity/winnest/10.jpg";
import winnest11 from "../components/assets/portfolios/brand identity/winnest/11.jpg";
import winnest12 from "../components/assets/portfolios/brand identity/winnest/12.jpg";
import winnest13 from "../components/assets/portfolios/brand identity/winnest/13.jpg";
import winnest14 from "../components/assets/portfolios/brand identity/winnest/14.jpg";
import winnest15 from "../components/assets/portfolios/brand identity/winnest/15.jpg";
import winnest16 from "../components/assets/portfolios/brand identity/winnest/16.jpg";
import winnest17 from "../components/assets/portfolios/brand identity/winnest/17.jpg";

// zepeq
import zepeq1 from "../components/assets/portfolios/brand identity/zepeq/1.jpg";
import zepeq2 from "../components/assets/portfolios/brand identity/zepeq/2.jpg";
import zepeq3 from "../components/assets/portfolios/brand identity/zepeq/3.jpg";
import zepeq4 from "../components/assets/portfolios/brand identity/zepeq/4.jpg";
import zepeq5 from "../components/assets/portfolios/brand identity/zepeq/5.jpg";
import zepeq6 from "../components/assets/portfolios/brand identity/zepeq/6.jpg";
import zepeq7 from "../components/assets/portfolios/brand identity/zepeq/7.jpg";
import zepeq8 from "../components/assets/portfolios/brand identity/zepeq/8.jpg";
import zepeq9 from "../components/assets/portfolios/brand identity/zepeq/9.jpg";
import zepeq10 from "../components/assets/portfolios/brand identity/zepeq/10.jpg";
import zepeq11 from "../components/assets/portfolios/brand identity/zepeq/11.jpg";
import zepeq12 from "../components/assets/portfolios/brand identity/zepeq/12.jpg";
import zepeq13 from "../components/assets/portfolios/brand identity/zepeq/13.jpg";
import zepeq14 from "../components/assets/portfolios/brand identity/zepeq/14.jpg";
import zepeq15 from "../components/assets/portfolios/brand identity/zepeq/15.jpg";
import zepeq16 from "../components/assets/portfolios/brand identity/zepeq/16.jpg";

// zxon
import zxon1 from "../components/assets/portfolios/brand identity/zxon/1.jpg";
import zxon2 from "../components/assets/portfolios/brand identity/zxon/2.jpg";
import zxon3 from "../components/assets/portfolios/brand identity/zxon/3.jpg";
import zxon4 from "../components/assets/portfolios/brand identity/zxon/4.jpg";
import zxon5 from "../components/assets/portfolios/brand identity/zxon/5.jpg";
import zxon6 from "../components/assets/portfolios/brand identity/zxon/6.jpg";
import zxon7 from "../components/assets/portfolios/brand identity/zxon/7.jpg";
import zxon8 from "../components/assets/portfolios/brand identity/zxon/8.jpg";
import zxon9 from "../components/assets/portfolios/brand identity/zxon/9.jpg";
import zxon10 from "../components/assets/portfolios/brand identity/zxon/10.jpg";
import zxon11 from "../components/assets/portfolios/brand identity/zxon/11.jpg";
import zxon12 from "../components/assets/portfolios/brand identity/zxon/12.jpg";
import zxon13 from "../components/assets/portfolios/brand identity/zxon/13.jpg";
import zxon14 from "../components/assets/portfolios/brand identity/zxon/14.jpg";

// Type definition for project details
interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  client: string;
  date: string;
  role: string;
  website: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  images: string[];
}

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [viewCount, setViewCount] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const projectDatabase: ProjectDetail[] = [
    // nexus
    {
      slug: "nexus-brand-identity",
      title: "Nexus Brand Identity",
      category: "Brand Identity",
      client: "Personal Portfolio",
      date: "Apr 2024",
      role: "Brand Designer",
      website: "#",
      description:
        "Corporate identity for an AI-driven analytics startup. The design language conveys precision, speed, and futuristic innovation through abstract geometry and neon gradients.",
      technologies: ["Illustrator", "Photoshop"],
      thumbnail: nexus1,
      images: [
        nexus2,
        nexus3,
        nexus4,
        nexus5,
        nexus6,
        nexus7,
        nexus8,
        nexus9,
        nexus10,
        nexus11,
        nexus12,
        nexus13,
        nexus14,
        nexus15,
        nexus16,
        nexus17,
        nexus18,
        nexus19,
        nexus20,
        nexus21,
        nexus22,
        nexus23,
        nexus24,
        nexus25,
        nexus26,
      ],
    },

    // boldpath-brand-identity
    {
      slug: "boldpath-brand-identity",
      title: "BoldPath Brand Identity",
      category: "Brand Identity",
      client: "Personal Portfolio",
      date: "Oct 2024",
      role: "Brand Designer",
      website: "#",
      description:
        "A complete brand identity for a new-age logistics company, focusing on reliability and speed.",
      technologies: ["Adobe Illustrator", "Photoshop"],
      thumbnail: boldpath1,
      images: [
        boldpath2,
        boldpath3,
        boldpath4,
        boldpath5,
        boldpath6,
        boldpath7,
        boldpath8,
        boldpath9,
        boldpath10,
        boldpath11,
        boldpath12,
        boldpath13,
        boldpath14,
        boldpath15,
        boldpath16,
        boldpath17,
        boldpath18,
        boldpath19,
        boldpath20,
        boldpath21,
        boldpath22,
        boldpath23,
        boldpath24,
        boldpath25,
        boldpath26,
        boldpath27,
        boldpath28,
        boldpath29,
        boldpath30,
        boldpath31,
        boldpath32,
        boldpath33,
        boldpath34,
        boldpath35,
        boldpath36,
        boldpath37,
        boldpath38,
        boldpath39,
        boldpath40,
        boldpath41,
        boldpath42,
        boldpath43,
        boldpath44,
        boldpath45,
        boldpath46,
        boldpath47,
      ],
    },

    // arborsphere

    {
      slug: "arborsphere-brand-identity",
      title: "ArborSphere Brand Identity",
      category: "Brand Identity",
      client: "Personal Portfolio",
      date: "Apr 2024",
      role: "Brand Designer",
      website: "#",
      description:
        "Corporate identity for an AI-driven analytics startup. The design language conveys precision, speed, and futuristic innovation through abstract geometry and neon gradients.",
      technologies: ["Illustrator", "After Effects", "Cinema 4D"],
      thumbnail: arborsphere1,
      images: [
        arborsphere2,
        arborsphere3,
        arborsphere4,
        arborsphere5,
        arborsphere6,
        arborsphere7,
        arborsphere8,
        arborsphere9,
        arborsphere10,
        arborsphere11,
        arborsphere12,
        arborsphere13,
        arborsphere14,
        arborsphere15,
        arborsphere16,
        arborsphere17,
        arborsphere18,
        arborsphere19,
        arborsphere20,
        arborsphere21,
        arborsphere22,
        arborsphere23,
        arborsphere24,
        arborsphere25,
        arborsphere26,
      ],
    },

    {
      slug: "dynamic-brand-identity",
      title: "Tech Startup Identity",
      category: "Branding",
      client: "Nexus AI",
      date: "Apr 2023",
      role: "Lead Brand Designer",
      website: "#",
      description:
        "Corporate identity for an AI-driven analytics startup. The design language conveys precision, speed, and futuristic innovation through abstract geometry and neon gradients.",
      technologies: ["Illustrator", "After Effects", "Cinema 4D"],
      thumbnail: dynamic1,
      images: [
        dynamic2,
        dynamic3,
        dynamic4,
        dynamic5,
        dynamic6,
        dynamic7,
        dynamic8,
        dynamic9,
        dynamic10,
        dynamic11,
        dynamic12,
      ],
    },

    {
      slug: "ecogrow-brand-identity",
      title: "Tech Startup Identity",
      category: "Branding",
      client: "Nexus AI",
      date: "Apr 2023",
      role: "Lead Brand Designer",
      website: "#",
      description:
        "Corporate identity for an AI-driven analytics startup. The design language conveys precision, speed, and futuristic innovation through abstract geometry and neon gradients.",
      technologies: ["Illustrator", "After Effects", "Cinema 4D"],
      thumbnail: ecogrow1,
      images: [
        ecogrow1,
        ecogrow2,
        ecogrow3,
        ecogrow4,
        ecogrow5,
        ecogrow6,
        ecogrow7,
        ecogrow8,
        ecogrow9,
        ecogrow10,
        ecogrow11,
        ecogrow12,
        ecogrow13,
        ecogrow14,
        ecogrow15,
        ecogrow16,
      ],
    },

    {
      slug: "greenbloom-brand-identity",
      title: "Tech Startup Identity",
      category: "Branding",
      client: "Nexus AI",
      date: "Apr 2023",
      role: "Lead Brand Designer",
      website: "#",
      description:
        "Corporate identity for an AI-driven analytics startup. The design language conveys precision, speed, and futuristic innovation through abstract geometry and neon gradients.",
      technologies: ["Illustrator", "After Effects", "Cinema 4D"],
      thumbnail: greenbloom1,
      images: [
        greenbloom2,
        greenbloom3,
        greenbloom4,
        greenbloom5,
        greenbloom6,
        greenbloom7,
        greenbloom8,
        greenbloom9,
        greenbloom10,
        greenbloom11,
        greenbloom12,
        greenbloom13,
        greenbloom14,
        greenbloom15,
        greenbloom16,
        greenbloom17,
        greenbloom18,
        greenbloom19,
        greenbloom20,
        greenbloom21,
        greenbloom22,
        greenbloom23,
        greenbloom24,
        greenbloom25,
        greenbloom26,
      ],
    },

    {
      slug: "meloplay-brand-identity",
      title: "Tech Startup Identity",
      category: "Branding",
      client: "Nexus AI",
      date: "Apr 2023",
      role: "Lead Brand Designer",
      website: "#",
      description:
        "Corporate identity for an AI-driven analytics startup. The design language conveys precision, speed, and futuristic innovation through abstract geometry and neon gradients.",
      technologies: ["Illustrator", "After Effects", "Cinema 4D"],
      thumbnail: meloplay1,
      images: [
        meloplay2,
        meloplay3,
        meloplay4,
        meloplay5,
        meloplay6,
        meloplay7,
        meloplay8,
        meloplay9,
        meloplay10,
        meloplay11,
        meloplay12,
        meloplay13,
        meloplay14,
      ],
    },

    {
      slug: "momentum-brand-identity",
      title: "Tech Startup Identity",
      category: "Branding",
      client: "Nexus AI",
      date: "Apr 2023",
      role: "Lead Brand Designer",
      website: "#",
      description:
        "Corporate identity for an AI-driven analytics startup. The design language conveys precision, speed, and futuristic innovation through abstract geometry and neon gradients.",
      technologies: ["Illustrator", "After Effects", "Cinema 4D"],
      thumbnail: momentum1,
      images: [
        momentum2,
        momentum3,
        momentum4,
        momentum5,
        momentum6,
        momentum7,
        momentum8,
        momentum9,
        momentum10,
        momentum11,
        momentum12,
        momentum13,
        momentum14,
        momentum15,
        momentum16,
        momentum17,
        momentum18,
        momentum19,
        momentum20,
        momentum21,
        momentum22,
      ],
    },

    {
      slug: "pplayer-brand-identity",
      title: "Tech Startup Identity",
      category: "Branding",
      client: "Nexus AI",
      date: "Apr 2023",
      role: "Lead Brand Designer",
      website: "#",
      description:
        "Corporate identity for an AI-driven analytics startup. The design language conveys precision, speed, and futuristic innovation through abstract geometry and neon gradients.",
      technologies: ["Illustrator", "After Effects", "Cinema 4D"],
      thumbnail: pplayer1,
      images: [
        pplayer2,
        pplayer3,
        pplayer4,
        pplayer5,
        pplayer6,
        pplayer7,
        pplayer8,
        pplayer9,
        pplayer10,
        pplayer11,
        pplayer12,
        pplayer13,
        pplayer14,
        pplayer15,
        pplayer16,
      ],
    },

    {
      slug: "ranova-brand-identity",
      title: "Tech Startup Identity",
      category: "Branding",
      client: "Nexus AI",
      date: "Apr 2023",
      role: "Lead Brand Designer",
      website: "#",
      description:
        "Corporate identity for an AI-driven analytics startup. The design language conveys precision, speed, and futuristic innovation through abstract geometry and neon gradients.",
      technologies: ["Illustrator", "After Effects", "Cinema 4D"],
      thumbnail: ranova1,
      images: [
        ranova2,
        ranova3,
        ranova4,
        ranova5,
        ranova6,
        ranova7,
        ranova8,
        ranova9,
        ranova10,
        ranova11,
        ranova12,
        ranova13,
        ranova14,
        ranova15,
        ranova16,
        ranova17,
        ranova18,
        ranova19,
        ranova20,
        ranova21,
        ranova22,
        ranova23,
      ],
    },

    {
      slug: "uniflora-brand-identity",
      title: "Tech Startup Identity",
      category: "Branding",
      client: "Nexus AI",
      date: "Apr 2023",
      role: "Lead Brand Designer",
      website: "#",
      description:
        "Corporate identity for an AI-driven analytics startup. The design language conveys precision, speed, and futuristic innovation through abstract geometry and neon gradients.",
      technologies: ["Illustrator", "After Effects", "Cinema 4D"],
      thumbnail: uniflora1,
      images: [
        uniflora2,
        uniflora3,
        uniflora4,
        uniflora5,
        uniflora6,
        uniflora7,
        uniflora8,
        uniflora9,
        uniflora10,
        uniflora11,
        uniflora12,
        uniflora13,
        uniflora14,
        uniflora15,
        uniflora16,
        uniflora17,
      ],
    },

    {
      slug: "winnest-brand-identity",
      title: "Tech Startup Identity",
      category: "Branding",
      client: "Nexus AI",
      date: "Apr 2023",
      role: "Lead Brand Designer",
      website: "#",
      description:
        "Corporate identity for an AI-driven analytics startup. The design language conveys precision, speed, and futuristic innovation through abstract geometry and neon gradients.",
      technologies: ["Illustrator", "After Effects", "Cinema 4D"],
      thumbnail: winnest1,
      images: [
        winnest2,
        winnest3,
        winnest4,
        winnest5,
        winnest6,
        winnest7,
        winnest8,
        winnest9,
        winnest10,
        winnest11,
        winnest12,
        winnest13,
        winnest14,
        winnest15,
        winnest16,
        winnest17,
      ],
    },

    {
      slug: "cloudman-brand-identity",
      title: "Tech Startup Identity",
      category: "Branding",
      client: "Nexus AI",
      date: "Apr 2023",
      role: "Lead Brand Designer",
      website: "#",
      description:
        "Corporate identity for an AI-driven analytics startup. The design language conveys precision, speed, and futuristic innovation through abstract geometry and neon gradients.",
      technologies: ["Illustrator", "After Effects", "Cinema 4D"],
      thumbnail: cloudman1,
      images: [
        cloudman2,
        cloudman3,
        cloudman4,
        cloudman5,
        cloudman6,
        cloudman7,
        cloudman8,
        cloudman9,
        cloudman10,
        cloudman11,
      ],
    },

    {
      slug: "zepeq-brand-identity",
      title: "Tech Startup Identity",
      category: "Branding",
      client: "Nexus AI",
      date: "Apr 2023",
      role: "Lead Brand Designer",
      website: "#",
      description:
        "Corporate identity for an AI-driven analytics startup. The design language conveys precision, speed, and futuristic innovation through abstract geometry and neon gradients.",
      technologies: ["Illustrator", "After Effects", "Cinema 4D"],
      thumbnail: zepeq1,
      images: [
        zepeq2,
        zepeq3,
        zepeq4,
        zepeq5,
        zepeq6,
        zepeq7,
        zepeq8,
        zepeq9,
        zepeq10,
        zepeq11,
        zepeq12,
        zepeq13,
        zepeq14,
        zepeq15,
        zepeq16,
      ],
    },

    {
      slug: "zxon-brand-identity",
      title: "Tech Startup Identity",
      category: "Branding",
      client: "Nexus AI",
      date: "Apr 2023",
      role: "Lead Brand Designer",
      website: "#",
      description:
        "Corporate identity for an AI-driven analytics startup. The design language conveys precision, speed, and futuristic innovation through abstract geometry and neon gradients.",
      technologies: ["Illustrator", "After Effects", "Cinema 4D"],
      thumbnail: zxon1,
      images: [
        zxon2,
        zxon3,
        zxon4,
        zxon5,
        zxon6,
        zxon7,
        zxon8,
        zxon9,
        zxon10,
        zxon11,
        zxon12,
        zxon13,
        zxon14,
      ],
    },
  ];

  const project = projectDatabase.find((p) => p.slug === slug);

  useEffect(() => {
    // Scroll to top when slug changes
    window.scrollTo(0, 0);

    if (!project) {
      navigate("/404"); // Or back to projects list: navigate("/projects");
      return;
    }

    // Simulate view count increment logic
    const storageKey = `project_views_${slug}`;
    const currentViews = parseInt(localStorage.getItem(storageKey) || "120");

    // Increment only once per session (simulated)
    const sessionKey = `viewed_${slug}`;
    if (!sessionStorage.getItem(sessionKey)) {
      const newViews = currentViews + 1;
      localStorage.setItem(storageKey, newViews.toString());
      setViewCount(newViews);
      sessionStorage.setItem(sessionKey, "true");
    } else {
      setViewCount(currentViews);
    }
  }, [slug, project, navigate]);

  if (!project) {
    return null; // or a loading spinner while redirecting
  }

  return (
    <div className="bg-dark-900 min-h-screen">
      <SEO
        title={`${project.title} | ArifulFolio`}
        description={project.description}
        keywords={`${project.title}, ${project.category}, ${project.technologies.join(', ')}, ariful islam project`}
      />

      {/* PARALLAX HERO HERO */}
      <div className="relative h-[85vh] overflow-hidden flex items-end pb-20">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark-900/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10"></div>
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                {project.category}
              </span>
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-wider text-white">
                <Eye size={14} /> {viewCount} Views
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 leading-none">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* INFO BAR */}
      <div className="border-y border-white/10 bg-dark-800/30 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">
                Client
              </p>
              <p className="text-white font-bold">{project.client}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">
                Services
              </p>
              <p className="text-white font-bold">{project.category}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">
                Year
              </p>
              <p className="text-white font-bold">{project.date}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">
                Website
              </p>
              <a
                href={project.website}
                className="text-primary font-bold hover:underline flex items-center gap-1"
              >
                Live Preview <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <Section className="py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column - Sticky Info */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2 mb-12">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-dark-800 rounded-lg text-sm text-gray-300 border border-white/5 hover:border-primary/50 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.website}
                className="w-full bg-white text-black py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all shadow-xl hover:shadow-primary/20 group"
              >
                Visit Live Site{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:-rotate-45 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
                Project Overview
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* GALLERY - VERTICAL STACK */}
      <section className="pb-20 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl space-y-8 md:space-y-16">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-primary/30 pb-2 mb-4 inline-block">
              Visuals
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Project <span className="text-primary">Gallery</span>
            </h2>
          </div>

          {project.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="rounded-[20px] md:rounded-[40px] overflow-hidden border border-white/5 shadow-2xl relative"
            >
              <img
                src={img}
                alt={`Project Screen ${i + 1}`}
                className="w-full h-auto block object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* THANKS FOR WATCHING - FOOTER */}
      <div className="py-24 bg-dark-800/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-script text-white mb-4">
              Thanks
            </h2>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary tracking-wide uppercase mb-16">
              FOR WATCHING
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-24 max-w-4xl mx-auto text-left">
              <div>
                <h3 className="text-primary font-bold text-xl mb-6">
                  Get In Touch:
                </h3>
                <p className="text-white text-lg mb-3 flex flex-wrap gap-2">
                  <span className="font-bold">Whatsapp:</span>
                  <a
                    href="https://wa.me/8801938434733"
                    className="hover:text-primary transition-colors"
                  >
                    +8801938434733
                  </a>
                </p>
                <p className="text-white text-lg flex flex-wrap gap-2">
                  <span className="font-bold">Gmail:</span>
                  <a
                    href="mailto:arifulfolio@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    arifulfolio@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-primary font-bold text-xl mb-6">
                  Follow me For more
                </h3>
                <p className="text-white text-lg font-medium italic border-l-4 border-primary pl-4">
                  "Updates & Creative Design Concepts"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
