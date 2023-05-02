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
} from '@react-email/components'

// configure assest folder based on node environment
const baseUrl = process.env.VERCEL_URL ? `${process.env.VERCEL_URL}` : '/static'
interface SpringMailProps {
  userName: string
}

export const SpringSalesMail = ({ userName = 'Mary' }: SpringMailProps) => (
  <Html>
    <Head />
    <Preview>Brighten up your home for less with our flower sale!</Preview>
    <Body style={main}>
      <Container style={parentContainer}>
        <Link href='#' style={headingLink}>
          Petal Palace
        </Link>
        <Section style={heroSection}>
          <Img src={`${baseUrl}/banner.png`} style={banner} />
          <Link href='#' style={cta}>
            Get 33% off sale
          </Link>
        </Section>
        <Container style={container}>
          <Text style={paragraph}>Dear {userName},</Text>
          <Text style={paragraph}>
            Spring is in full swing, and what better way to celebrate the season
            of new beginnings than with fresh flowers? Our beautiful collection
            of blooms is now available at discounted prices that you don't want
            to miss!
          </Text>
          <Section style={storeLinks}>
            <Link href='#' style={secondaryCTA}>
              View Sales
            </Link>
            <Link href='#' style={secondaryCTA}>
              View Store
            </Link>
          </Section>
          <Section>
            <Text style={sectionHeading}>Popular Flower Bundles</Text>
            <Section>
              <Link href='#'>
                <Row>
                  <Column align='left'>
                    <Img
                      src={`${baseUrl}/plant.jpg`}
                      width='145'
                      height='120'
                      alt='Karupu Plant'
                      style={plantImg}
                    />
                  </Column>
                  <Column style={plantCopy}>
                    <Text style={plantName}>Karupu Plant</Text>
                    <Text>
                      This plant is a rare breed and grows up to 1-5 meters.
                    </Text>
                  </Column>
                </Row>
              </Link>
            </Section>
            <Hr style={{ margin: '1.5rem 0' }} />
            <Section style={socialLinks}>
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
            <Section style={unsubscribe}>
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
  </Html>
)

export default SpringSalesMail

const main = {
  backgroundColor: '#FFFFFF',
  margin: 'auto auto',
  color: '#000',
  fontFamily:
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
}

const headingLink = {
  display: 'block',
  fontSize: '1.2rem',
  padding: '0.5rem 0',
  fontWeight: '700',
  color: '#66634B',
  textAlign: 'center' as const,
}

const paragraph = {
  fontSize: '1rem',
}

const link = {
  color: '#000',
  textDecoration: 'underline',
}

const parentContainer = {
  border: '1px solid #eaeaea',
  margin: '40px auto',
  width: '390px',
}

const container = {
  maxWidth: '90%',
  margin: '0 auto',
  padding: '1.2rem',
}

const heroSection = {
  position: 'relative' as const,
  width: '100%',
  display: 'inline-block',
}

const banner = {
  width: 'inherit' as const,
  height: 'auto',
}

const cta = {
  padding: '13px 20px',
  borderRadius: '5px',
  backgroundColor: '#D13928',
  textAlign: 'center' as const,
  color: '#fff',
  display: 'block',
  width: '45%',
  margin: '0.5rem auto 0 auto',
}

const secondaryCTA = {
  padding: '0.7rem 1rem',
  border: '2px solid #D13928',
  color: '#D13928',
  borderRadius: '15px',
  margin: '0 1rem',
}

const plantName = {
  fontWeight: '600',
  fontSize: '1.125rem',
}

const plantImg = {
  borderRadius: '15px',
  objectFit: 'cover' as const,
}

const plantCopy = {
  color: '#000',
  padding: '0 0.8rem',
}

const unsubscribe = {
  textAlign: 'center' as const,
  width: 'inherit' as const,
  margin: '1rem auto',
}

const storeLinks = {
  margin: '2.5rem 0',
  display: 'flex',
  justifyContent: 'space-around',
}

const sectionHeading = {
  fontSize: '1.125rem',
  fontWeight: 'bold',
}

const socialLinks = {
  width: '150px',
  margin: '0 auto',
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
