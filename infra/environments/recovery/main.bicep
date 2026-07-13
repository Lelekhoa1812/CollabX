targetScope = 'resourceGroup'
param location string = resourceGroup().location
param tenantId string
module foundation '../dev/main.bicep' = {
  name: 'recovery-foundation'
  params: {
    location: location
    tenantId: tenantId
  }
}

