import React from 'react';
import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import Donate from '@/components/Donate';

const DonatePage = () => {
    return (
        <PageTransition>
            <Helmet>
                <title>Donate - SAMKAKSHA FOUNDATION</title>
                <meta name="description" content="Make a donation to SAMKAKSHA FOUNDATION and support our mission to empower communities. Your contribution makes a real difference." />
                <meta property="og:title" content="Donate - SAMKAKSHA FOUNDATION" />
                <meta property="og:description" content="Make a donation to SAMKAKSHA FOUNDATION and support our mission to empower communities. Your contribution makes a real difference." />
            </Helmet>
            <Donate />
        </PageTransition>
    );
};

export default DonatePage;