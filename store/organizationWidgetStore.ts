import { create } from 'zustand'

interface OrganizationStore {
  selectedOrganization: Organization | null
  isWidgetVisible: boolean
  setOrganization: (organization: Organization) => void
  hideWidget: () => void
}

const useOrganizationStore = create<OrganizationStore>((set) => ({
  selectedOrganization: null,
  isWidgetVisible: false,
  setOrganization: (organization) =>
    set({ selectedOrganization: organization, isWidgetVisible: true }),
  hideWidget: () => set({ isWidgetVisible: false })
}))

export default useOrganizationStore
