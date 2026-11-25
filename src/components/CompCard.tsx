
import { jsPDF } from 'jspdf'

const photos = {
  beauty: '/images-optimized/beauty/3Y3A8551-Edit-2-2.webp',
  fullBody: '/images-optimized/full-body/KAY_9647.webp',
  digitals: '/images-optimized/digitals/KAY_9653.webp',
}

async function loadImage(src: string): Promise<string> {
  const response = await fetch(src)

  if (!response.ok) {
    throw new Error(`Could not load image: ${src}`)
  }

  const blob = await response.blob()

  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject

    reader.readAsDataURL(blob)
  })
}

export default function CompCard() {
  const downloadCompCard = async () => {
    try {
      const [beauty, fullBody, digitals] = await Promise.all([
        loadImage(photos.beauty),
        loadImage(photos.fullBody),
        loadImage(photos.digitals),
      ])

      const pdf = new jsPDF('p', 'mm', 'a4')

      const gold = '#D6C5A5'
      const black = '#080808'

      // FRONT PAGE
      pdf.setFillColor(black)
      pdf.rect(0, 0, 210, 297, 'F')

      const beautyDimensions = pdf.getImageProperties(beauty)

const beautyRatio = Math.min(
  186 / beautyDimensions.width,
  205 / beautyDimensions.height
)

const beautyWidth = beautyDimensions.width * beautyRatio
const beautyHeight = beautyDimensions.height * beautyRatio

pdf.addImage(
  beauty,
  'WEBP',
  (210 - beautyWidth) / 2,
  12,
  beautyWidth,
  beautyHeight
)

      pdf.setTextColor(gold)
      pdf.setFont('times', 'normal')
      pdf.setFontSize(27)
      pdf.text('MICHELLE ANORCHIE', 105, 245, {
        align: 'center',
      })

      pdf.setFontSize(10)
      pdf.setTextColor(255, 255, 255)
      pdf.text('MODEL PORTFOLIO  |  ACCRA, GHANA', 105, 258, {
        align: 'center',
      })

      pdf.setDrawColor(gold)
      pdf.line(65, 270, 145, 270)

      pdf.setFontSize(9)
      pdf.text('FASHION  •  BEAUTY  •  EDITORIAL', 105, 282, {
        align: 'center',
      })

      // BACK PAGE
      pdf.addPage()
      pdf.setFillColor(black)
      pdf.rect(0, 0, 210, 297, 'F')

      // Full-body photograph
const fullBodyDimensions = pdf.getImageProperties(fullBody)

const fullBodyRatio = Math.min(
  91 / fullBodyDimensions.width,
  130 / fullBodyDimensions.height
)

const fullBodyWidth = fullBodyDimensions.width * fullBodyRatio
const fullBodyHeight = fullBodyDimensions.height * fullBodyRatio

pdf.addImage(
  fullBody,
  'WEBP',
  12 + (91 - fullBodyWidth) / 2,
  12 + (130 - fullBodyHeight) / 2,
  fullBodyWidth,
  fullBodyHeight
)

// Digitals photograph
const digitalsDimensions = pdf.getImageProperties(digitals)

const digitalsRatio = Math.min(
  91 / digitalsDimensions.width,
  130 / digitalsDimensions.height
)

const digitalsWidth = digitalsDimensions.width * digitalsRatio
const digitalsHeight = digitalsDimensions.height * digitalsRatio

pdf.addImage(
  digitals,
  'WEBP',
  107 + (91 - digitalsWidth) / 2,
  12 + (130 - digitalsHeight) / 2,
  digitalsWidth,
  digitalsHeight
)

      pdf.setTextColor(gold)
      pdf.setFont('times', 'normal')
      pdf.setFontSize(22)
      pdf.text('MODEL DETAILS', 105, 165, {
        align: 'center',
      })

      pdf.setDrawColor(gold)
      pdf.line(35, 173, 175, 173)

      const details = [
        ['HEIGHT', '177 cm'],
        ['BUST', '26 in'],
        ['WAIST', '19 in'],
        ['HIPS', '33 in'],
        ['DRESS SIZE', 'UK 6'],
        ['SHOE SIZE', 'EU 38'],
        ['LOCATION', 'Accra, Ghana'],
      ]

      let y = 188

      pdf.setFontSize(10)

      details.forEach(([label, value]) => {
        pdf.setTextColor(gold)
        pdf.text(label, 35, y)

        pdf.setTextColor(255, 255, 255)
        pdf.text(value, 175, y, {
          align: 'right',
        })

        y += 12
      })

      pdf.setDrawColor(gold)
      pdf.line(35, 276, 175, 276)

      pdf.setFontSize(9)
      pdf.setTextColor(255, 255, 255)
      pdf.text('michelleanorchie1@gmail.com', 105, 282, {
      align: 'center',
     })

    pdf.text('@mimy_michelle', 105, 290, {
    align: 'center',
    })

      pdf.save('Michelle-Anorchie-Comp-Card.pdf')
    } catch (error) {
      console.error(error)
      alert('Unable to generate the comp card. Please check your photographs.')
    }
  }

  return (
    <button className="comp-card-download" onClick={downloadCompCard}>
      DOWNLOAD COMP CARD
    </button>
  )
}
