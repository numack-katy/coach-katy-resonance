import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { submitIntakeForm, markIntakeComplete } from '@/lib/sanity'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const formData = await request.json()

    // Submit intake form to Sanity
    await submitIntakeForm(session.user.id, formData)

    // Mark intake as complete on client record
    await markIntakeComplete(session.user.id)

    return NextResponse.json(
      { success: true, message: 'Intake form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error submitting intake form:', error)
    return NextResponse.json(
      { error: 'Failed to submit intake form' },
      { status: 500 }
    )
  }
}
