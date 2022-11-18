const ApplicationController = require("../ApplicationController");
const { NotFoundError } = require("../../errors");

describe("applicationController", () => {
    describe("#getRoot", () => {
        it("should return 200", () => {
            const mockReq = {};
            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis(),
            };
            const applicationController = new ApplicationController();
            applicationController.handleGetRoot(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(200);
        });
    });

    describe("#handleNotFound", () => {
        it("should return 404", () => {
            const mockReq = {
                method: "get",
                url: "/root",
            };

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis(),
            };

            const applicationController = new ApplicationController();

            const err = new NotFoundError(mockReq.method, mockReq.url);

            applicationController.handleNotFound(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(404);

            expect(mockRes.json).toHaveBeenCalledWith({
                error: {
                    name: err.name,
                    message: err.message,
                    details: err.details || null,
                },
            });
        });
    });

    describe("#handleError", () => {
        it("should return 500", () => {
            const mockErr = {};

            const mockReq = {};

            const mockRes = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis(),
            };
            const applicationController = new ApplicationController();
            applicationController.handleError(mockErr, mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(500);
            expect(mockRes.json).toHaveBeenCalledWith({
                error: {
                    name: mockErr.name,
                    message: mockErr.message,
                    details: mockErr.details || null,
                },
            });
        });
    });

    describe("getOffsetFromRequest", () => {
        it("should return a number", () => {
            const req = { query: { page: 1, pageSize: 10 } };

            const applicationController = new ApplicationController();

            const offset = applicationController.getOffsetFromRequest(req);
            expect(offset).toBe(0);
        });
    });

    describe("buildPaginationObject", () => {
        it("should return an object", () => {
            const req = { query: { page: 1, pageSize: 10 } };
            const count = 10;
            const applicationController = new ApplicationController();
            const paginationObject = applicationController.buildPaginationObject(req, count);
            expect(paginationObject).toEqual({
                page: 1,
                pageCount: 1,
                pageSize: 10,
                count: 10,
            });
        });
    });
});