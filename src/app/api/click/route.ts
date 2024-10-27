import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma'; // 正しいインポートパス

export async function POST() {
  try {
    const click = await prisma.click.create({
      data: {
        count: 1, // クリックを1記録
      },
    });
    return NextResponse.json(click);
  } catch (error) {
    console.error('DBエラー:', error);
    return NextResponse.json({ message: 'クリック数の記録に失敗しました。' }, { status: 500 });
  }
}
