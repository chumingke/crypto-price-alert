import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// 测试函数
export async function testEmail() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['917822636@qq.com'],
      subject: '测试邮件 - 比特币预警工具',
      html: '<strong>如果收到这封邮件，说明 Resend 配置成功！</strong>'
    })
    console.log('邮件发送成功:', data)
  } catch (error) {
    console.error('邮件发送失败:', error)
  }
}