param name string
param location string
param managedIdentityId string
param image string
param environmentId string

resource app 'Microsoft.App/containerApps@2025-01-01' = {
  name: name
  location: location
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '${managedIdentityId}': {}
    }
  }
  properties: {
    managedEnvironmentId: environmentId
    configuration: {
      ingress: {
        external: false
        targetPort: 8000
      }
    }
    template: {
      containers: [
        {
          name: name
          image: image
          probes: [
            {
              type: 'Liveness'
              httpGet: {
                path: '/health/live'
                port: 8000
              }
            }
          ]
        }
      ]
    }
  }
}

output id string = app.id

