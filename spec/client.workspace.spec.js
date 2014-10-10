var twilio = require('../index');

describe('The Twilio WDS Workspace resource', function () {
    var client = new twilio.WdsClient('AC123', '123', 'WS123');

    beforeEach(function () {
        spyOn(client, 'request');
    });

    it('creates workspace', function () {
        client.workspaces.create({
            friendlyName: 'Test Workspace'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Workspaces',
            method: 'POST',
            form: {
                FriendlyName: 'Test Workspace'
            }
        }, undefined);
    });

    it('deletes workspace', function () {
        client.workspaces('WS123').delete();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Workspaces/WS123',
            method: 'DELETE',
            form: {}
        }, undefined);
    });

    it('gets workspace', function () {
        client.workspaces('WS123').get();
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Workspaces/WS123',
            method: 'GET',
            qs: {}
        }, undefined);
    });

    it('lists workspaces', function () {
        client.workspaces.list({
            friendlyName: 'Test Workspace'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Workspaces',
            method: 'GET',
            qs: {
                FriendlyName: 'Test Workspace'
            }
        }, undefined);
    });

    it('updates workspace', function () {
        client.workspaces('WS123').update({
            friendlyName: 'Test Workspace'
        });
        expect(client.request).toHaveBeenCalledWith({
            url: '/Accounts/AC123/Workspaces/WS123',
            method: 'POST',
            form: {
                FriendlyName: 'Test Workspace'
            }
        }, undefined);
    });
});
