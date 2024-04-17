import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Link,
  Img,
  Text,
  Section,
  Hr,
  Row,
  Column,
  CodeInline,
  Font,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'
import * as React from 'react'

// configure assest folder based on node environment
const baseUrl = process.env.VERCEL_URL ? `${process.env.VERCEL_URL}` : '/static'
interface SpringMailProps {
  userName: string
}

export const SpringSalesMail = ({ userName = 'Customer' }: SpringMailProps) => (
  <Html>
    <Head />
    <Font
      fontFamily='Karla'
      fallbackFontFamily='Verdana'
      webFont={{
        url: 'https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        format: 'woff2',
      }}
      fontWeight={400}
      fontStyle='normal'
    />
    <Preview>Brighten up your home for less!</Preview>
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: '#D13928',
              accent: '#66634B',
            },
          },
        },
      }}
    >
      <Body className='bg-white m-auto text-black'>
        <Container
          style={{
            border: '1.5px solid #eaeaea',
          }}
          className='w-[390px] my-[40px] mx-auto'
        >
          <Link
            href='#'
            className='block text-2xl py-2 px-0 font-bold text-accent text-center'
          >
            Petal Palace
          </Link>
          <Section className='relative w-full inline-block'>
            <Img src={`${baseUrl}/banner.png`} className='h-auto w-auto' />
            <Link
              href='#'
              className='py-3 px-5 rounded-md bg-primary text-center text-white block w-[45%] mt-2 mb-0 mx-auto'
            >
              Get 20% off
            </Link>
          </Section>
          <Container className='max-w-[90%] my-0 mx-auto p-5'>
            <Text style={paragraph}>Dear {userName},</Text>
            <Text style={paragraph}>
              Spring is in full swing, and what better way to celebrate the
              season of new beginnings than with fresh flowers? Our beautiful
              collection of blooms is now available at discounted prices that
              you don't want to miss!
            </Text>
            <Section className='my-10 mx-0 flex justify-around'>
              <Link href='#' style={secondaryCTA}>
                View Sales
              </Link>
              <Link href='#' style={secondaryCTA}>
                View Store
              </Link>
            </Section>
            <Section
              style={{
                border: '2px dashed gray',
              }}
              className='flex justify-center py-4 px-[4.5%] w-[90.5%] rounded-md bg-slate-200'
            >
              Use code <CodeInline>SPRING20</CodeInline> at checkout
            </Section>
            <Section>
              <Text className='text-xl font-bold'>Popular Flower Bundles</Text>
              <Section>
                <Link href='#'>
                  <Row>
                    <Column align='left'>
                      <Img
                        src={`${baseUrl}/plant.jpg`}
                        width='145'
                        height='120'
                        alt='Karupu Plant'
                        className='rounded-xl object-cover'
                      />
                    </Column>
                    <Column className='text-black py-0 px-3'>
                      <Text className='text-lg font-semibold'>
                        Karupu Plant
                      </Text>
                      <Text>
                        This plant is a rare breed and grows up to 1-5 meters.
                      </Text>
                    </Column>
                  </Row>
                </Link>
              </Section>
              <Hr style={{ margin: '1.5rem 0' }} />
              <Section className='w-[150px] my-0 mx-auto'>
                <Row>
                  <Column align='left'>
                    <Link href='#' style={socialIcon}>
                      <Img
                        src={`${baseUrl}/twitter.png`}
                        height='19'
                        width='19'
                      />
                    </Link>
                  </Column>
                  <Column align='center'>
                    <Link href='#' style={socialIcon}>
                      <Img
                        src={`${baseUrl}/instagram.png`}
                        height='19'
                        width='19'
                      />
                    </Link>
                  </Column>
                  <Column align='right'>
                    <Link href='#' style={socialIcon}>
                      <Img src={`${baseUrl}/mail.png`} height='19' width='19' />
                    </Link>
                  </Column>
                </Row>
              </Section>
              <Section className='text-center w-auto my-4 mx-auto'>
                <Link href='#' style={link}>
                  Unsubscribe
                </Link>
                <Text style={paragraph}>
                  Want to hear from us again?{' '}
                  <Link href='#' style={link}>
                    Click here
                  </Link>
                </Text>
              </Section>
            </Section>
          </Container>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default SpringSalesMail

const paragraph = {
  fontSize: '1rem',
}

const link = {
  color: '#000',
  textDecoration: 'underline',
}

const secondaryCTA = {
  padding: '0.7rem 1rem',
  border: '2px solid #D13928',
  color: '#D13928',
  borderRadius: '15px',
  margin: '0 1rem',
}

const socialIcon = {
  display: 'flex',
  width: '30px',
  height: '30px',
  margin: '0 0.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: '#000',
}
