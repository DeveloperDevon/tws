import { Typography } from '@material-ui/core'

export const Packages: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'lightblue', color: 'white', padding: 15 }}>
      <Typography variant="h6">Packages</Typography>
      <Typography variant="body1">
        We have 3 packages to fit everyone&#39;s budget.
      </Typography>
      <ol style={{ padding: '0px 15px' }}>
        <li>
          <Typography variant="body1">
            Our Time &amp; Energy ~ We will use what you have to create
            organized spaces.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Organizing on a Budget ~ We will use economical organizers to create
            very functional and organized spaces.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Picture Perfect ~ We will use top of the line storage and organizing
            products to create beautifully, organized spaces.
          </Typography>
        </li>
      </ol>
    </div>
  )
}
