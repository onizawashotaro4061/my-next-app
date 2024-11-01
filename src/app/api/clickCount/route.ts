import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json(); // リクエストのボディを直接取得
    const { course } = body;

    if (!course) {
      return NextResponse.json({ error: 'Label is required' }, { status: 400 });
    }

    const clickCount = await prisma.clickCount.upsert({
      where: { id: course },
      update: { count: { increment: 1 } },
      create: { count: 1, course: course },
    });

    return NextResponse.json({ count: clickCount.count });
  } catch (error) {
    console.error('Error in ClickCount API:', error); // エラーをコンソールに出力
    return NextResponse.json({ error: 'Error inserting click count' }, { status: 500 });
  }
}
