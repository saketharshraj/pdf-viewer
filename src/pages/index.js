import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { PDFViewer } from '@react-pdf/renderer';
import DocumentViewer from '../components/DocumentViewer.jsx';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        <>
            <Head>
                <title>PDF Viewer</title>
                <meta
                    name='description'
                    content='A PDF Viewer App with multiple language support'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            {isClient && (
                <PDFViewer>
                    <DocumentViewer />
                </PDFViewer>
            )}
        </>
    );
}

