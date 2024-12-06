interface Organization {
  id: number
  name: string
  description: string
  photo?: string
  goals: Goals[]
  stories: Stories[]
  users: Users[]
  common_discount: number
  max_discount: number
  latitude: number
  longitude: number
}

interface Goals {
  id: number
  name: string
}

interface Stories {
  id: number
  title: string
}

interface Users {
  id: number
  name: string
}

interface OrganizationsProps {
  organizations: Organization[]
}

interface OrganizationWidgetProps {
  organization: Organization | null
  onClose: () => void
}
