
interface DashboardPageProps {
    params: {
        storeId: string;
    };
};

const DashboardPage: React.FC<DashboardPageProps> = async ({
    params
}) => {
    

    return (
        <div className="flex-col">
            dashboard page
        </div>
    );
};

export default DashboardPage;