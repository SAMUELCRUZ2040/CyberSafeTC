"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function Delay({ href, content, ...params}) {
    const router = useRouter();

    const delayPage = useCallback((e)=>{
        e.preventDefault();
        setTimeout(()=>{
            router.push(href)
        },0)
    },[href, router]);

  return (
    <Link  href={href} onClick={delayPage} {...params}> {content} </Link>
  )
}